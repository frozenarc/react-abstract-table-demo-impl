import getNextCell from './get-next-cell';

/*
The function returns event handler for `onClick` event would occur on cell.
*/
const onClickCell = (dataFuncs, stateFuncs) => (rowIdx, colIdx, tableCell) => (e) => {
  if(stateFuncs.isCellSelected(tableCell.getTable().getState(), rowIdx, colIdx)) {
    tableCell.getTable().setState(stateFuncs.getClonedState({ rowIdx, colIdx, click: true, editing: true }));
  } else {
    tableCell.getTable().setState(stateFuncs.getClonedState({ rowIdx, colIdx, click: true, editing: false }));
  }
};

/*
The function returns event handler for `onKeyDown` event would occur on table.
*/
const onKeyDownTable = (dataFuncs, stateFuncs) => (table) => (e) => {
  if(stateFuncs.isClicked(table.getState())) {
    if(e.keyCode === 13) {
      table.setState(stateFuncs.getClonedState({
        rowIdx: table.getState().rowIdx,
        colIdx: table.getState().colIdx,
        click: true, editing: true
      }));

    } else {
      const nextCell = getNextCell(e, dataFuncs.getDataRowCount(), dataFuncs.getDataCellCount(),
        table.getState().rowIdx, table.getState().colIdx);
      table.setState(stateFuncs.getClonedState({ ...nextCell, click: true }));
    }
  }
};

export const getEventFunctions = (dataFuncs, stateFuncs) => {
  return {
    onClickCell: onClickCell(dataFuncs, stateFuncs),
    onKeyDownTable: onKeyDownTable(dataFuncs, stateFuncs)
  }
};
