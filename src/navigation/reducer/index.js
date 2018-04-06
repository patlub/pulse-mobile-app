import RootNavigator from '../rootNavigator'

const initialState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams('Login'),
);

const navigationReducer = (state = initialState, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state)
  return nextState || state
};

export default navigationReducer