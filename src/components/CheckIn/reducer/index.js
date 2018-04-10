

const INITIAL_STATE = {

}

export default (state = INITIAL_STATE, action) => {
    // Checkin template reducer
      switch (action.type) {
        case 'CHECKIN':
            return { ...state }
          default:
           return state
       }
}
