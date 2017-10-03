/*
Returns initial state.
*/
export const getState = (state) => () => {
  return state;
};

/*
Returns cloned state of initial state with changes of fragment.
*/
export const getClonedState = (state) => (fragment) => {
  return Object.assign({}, state, fragment);
};

/*
Checks wether cell is selected or not.
*/
export const isCellSelected = (state, rowIdx, colIdx) => {
  return state.rowIdx === rowIdx
    && state.colIdx === colIdx
    && state.click
};

/*
Checks wether any cell selected in table or not.
*/
export const isClicked = (state) => {
  return state.click;
};

/*
Checks wether cell is editing or not.
*/
export const isCellEditing = (state, rowIdx, colIdx) => {
    return state.rowIdx === rowIdx
      && state.colIdx === colIdx
      && state.editing
};

export const getStateFunctions = (state) => ({
  getState: getState(state),
  getClonedState: getClonedState(state),
  isCellSelected,
  isClicked,
  isCellEditing
});
