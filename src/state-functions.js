export const getState = (state) => () => {
  return state;
};

export const getClonedState = (state) => (fragment) => {
  return Object.assign({}, state, fragment);
};

export const getStateFunctions = (state) => ({
  getState: getState(state),
  getClonedState: getClonedState(state)
});
