
const INITIAL_STATE = {

}

export default (state = INITIAL_STATE, action) => {
  // Partner History template reducer
  switch (action.type) {
    case 'PARTNER_HISTORY':
      return { ...state }
    default:
      return state
  }
}
