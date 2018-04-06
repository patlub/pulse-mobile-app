
const INITIAL_STATE = {

}

export default (state = INITIAL_STATE, action) => {
  // Login template reducer
  switch (action.type) {
    case 'LOGIN':
      return { ...state }
    default:
      return state
  }
}