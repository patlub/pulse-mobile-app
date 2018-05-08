
const INITIAL_STATE = {

}

export default (state = INITIAL_STATE, action) => {
  // New Checkin template reducer
  switch (action.type) {
    case 'NEWCHECKIN':
      return { ...state }
    default:
      return state
  }
}
