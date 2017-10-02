import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Input } from 'semantic-ui-react';

import Table2 from 'react-abstract-table';

import { getDataFunctions } from './data-functions';
import { getStateFunctions } from './state-functions';
import * as renderer from './renderer-functions';

import getNextCell from './get-next-cell';
import data from './sample-data';
import state from './sample-state';
import InputTableCell from './input-table-cell';

const dataFuncs = getDataFunctions(data);
const stateFuncs = getStateFunctions(state);

const getTableCellProps = (rowIdx, colIdx, tableCell) => {
  return {
    negative: (tableCell.getTable().getState().colIdx === colIdx
      && tableCell.getTable().getState().rowIdx === rowIdx
      && tableCell.getTable().getState().click),
    onClick: () => {
      tableCell.getTable().setState(stateFuncs.getClonedState({ rowIdx, colIdx, click: true }));
    }
  };
};

const getTableProps = (table) => {
  return {
    celled: true,
    tabIndex: 0,
    onKeyDown: (e) => {
      if(table.getState().click) {
        const nextCell = getNextCell(e,
          dataFuncs.getDataRowCount(),
          dataFuncs.getDataCellCount(),
          table.getState().rowIdx, table.getState().colIdx);
        table.setState(stateFuncs.getClonedState({ ...nextCell, click: true }));
      }
    }
  };
};

const getEditableTableCellProps = (rowIdx, colIdx, tableCell) => {
  return {
    negative: (tableCell.getTable().getState().colIdx === colIdx
      && tableCell.getTable().getState().rowIdx === rowIdx
      && tableCell.getTable().getState().click),
    onClick: (e) => {
      if(tableCell.getTable().getState().colIdx === colIdx
        && tableCell.getTable().getState().rowIdx === rowIdx
        && tableCell.getTable().getState().click) {
        tableCell.getTable().setState(stateFuncs.getClonedState({ rowIdx, colIdx, click: true, editing: true }));
      } else {
        //dataFuncs.setDataValue(rowIdx, colIdx)
        tableCell.getTable().setState(stateFuncs.getClonedState({ rowIdx, colIdx, click: true, editing: false }));
      }
    }
  };
};

const renderEditableTableCell = (dataFuncs, stateFuncs, getTableCellProps) => (rowIdx, colIdx, tableCell) => {
  if(tableCell.getTable().getState().colIdx === colIdx
    && tableCell.getTable().getState().rowIdx === rowIdx
    && tableCell.getTable().getState().editing) {
    return (
      <InputTableCell
        dataFuncs={dataFuncs}
        rowIdx={rowIdx}
        colIdx={colIdx}
        tableCellProps={getTableCellProps(rowIdx, colIdx, tableCell)}
        defaultValue={dataFuncs.getDataValue(rowIdx, colIdx)} />
    );
  } else {
    return (
      <Table.Cell {...getTableCellProps(rowIdx, colIdx, tableCell)}>
        {dataFuncs.getDataValue(rowIdx, colIdx)}
      </Table.Cell>
    );
  }
};

ReactDOM.render(
  <div>
    <Table2
      getDataRowCount={dataFuncs.getDataRowCount}
      getDataCellCount={dataFuncs.getDataCellCount}
      getHeaderRowCount={dataFuncs.getHeaderRowCount}
      getHeaderCellCount={dataFuncs.getHeaderCellCount}
      renderTable={renderer.renderTable(dataFuncs, stateFuncs, getTableProps)}
      renderTableBody={renderer.renderTableBody(dataFuncs, stateFuncs, () => {})}
      renderTableRow={renderer.renderTableRow(dataFuncs, stateFuncs, () => {})}
      renderTableCell={renderEditableTableCell(dataFuncs, stateFuncs, getEditableTableCellProps)}
      renderTableHeader={renderer.renderTableHeader(dataFuncs, stateFuncs, () => {})}
      renderTableHeaderRow={renderer.renderTableHeaderRow(dataFuncs, stateFuncs, () => {})}
      renderTableHeaderCell={renderer.renderTableHeaderCell(dataFuncs, stateFuncs, () => {})}
    />
  </div>,
  document.getElementById('app'));
