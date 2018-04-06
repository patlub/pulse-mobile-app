
const INITIAL_STATE = {

}

export default (state = INITIAL_STATE, action) => {
  // Partner List template reducer
  switch (action.type) {
    case 'PARTNER_LIST':
      return { ...state }
    default:
      return state
  }
}