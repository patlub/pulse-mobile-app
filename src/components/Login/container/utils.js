import { Buffer } from 'buffer'

const canSubmitCheckin = (roles) => {
  const validRoles = ['Admin', 'LENKEN_ADMIN', 'VOF_Admin', 'TSM', 'Success Ops', 'CX', 'Senior Technical Consultant', 'OS']
  return roles.some(role => validRoles.includes(role))
}

const isGuest = roles => roles.indexOf('Guest') !== -1

const getDecodedJwtToken = async token => {
  const jwtBody = await token.split('.')[1]
  const base64 = await jwtBody.replace('-', '+').replace('_', '/')
  const decodedJwt = await Buffer.from(base64, 'base64')
  return JSON.parse(decodedJwt)

}

export const isValidToken = async token => {
  let decodedToken = undefined
  try {
    decodedToken = await getDecodedJwtToken(token)
  } catch(err){
    throw new Error(err)
  }
  if (decodedToken) {
    const tokenExpiry = decodedToken.exp
    const date = new Date()
    const now = date.getTime()

    if (tokenExpiry < now / 1000) {
      throw new Error('token expired')
    }
    const userInfo = decodedToken.UserInfo
    const roles = Object.keys(userInfo.roles)
    if (isGuest(roles)) {
      throw new Error('Not authorized')
    }
    return true
  }
  throw new Error('Invalid credentials')
}

export const getUserInfo = async token => {
  try {
    const decodedToken = await getDecodedJwtToken(token)
    const userInfo = decodedToken.UserInfo
    const roles = Object.keys(userInfo.roles)
    return {
      gId: userInfo.id,
      gToken: token,
      gName: userInfo.name,
      gEmail: userInfo.email,
      picture: userInfo.picture,
      canSubmitCheckin: canSubmitCheckin(roles),
    }
  } catch(error){
    throw new Error(error)
  }
}
