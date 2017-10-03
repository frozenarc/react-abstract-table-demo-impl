import React from 'react';
import ReactDOM from 'react-dom';

import Table from 'react-abstract-table';

import { getDataFunctions } from './data-functions';
import { getStateFunctions } from './state-functions';
import { getEventFunctions } from './event-functions';
import * as renderer from './renderer-functions';

import data from './sample-data';
import state from './sample-state';

const dataFuncs = getDataFunctions(data);
const stateFuncs = getStateFunctions(state);
const eventFuncs = getEventFunctions(dataFuncs, stateFuncs);

const getTableProps = (dataFuncs, stateFuncs, eventFuncs) => (table) => {
  return {
    celled: true,
    tabIndex: 0,
    onKeyDown: eventFuncs.onKeyDownTable(table)
  };
};

const getTableCellProps = (dataFuncs, stateFuncs, eventFuncs) => (rowIdx, colIdx, tableCell) => {
  return {
    negative: stateFuncs.isCellSelected(tableCell.getTable().getState(), rowIdx, colIdx),
    onClick: eventFuncs.onClickCell(rowIdx, colIdx, tableCell)
  };
};

ReactDOM.render(
  <div>
    <Table
      getDataRowCount={dataFuncs.getDataRowCount}
      getDataCellCount={dataFuncs.getDataCellCount}
      getHeaderRowCount={dataFuncs.getHeaderRowCount}
      getHeaderCellCount={dataFuncs.getHeaderCellCount}
      renderTable={renderer.renderTable(dataFuncs, stateFuncs, getTableProps(dataFuncs, stateFuncs, eventFuncs))}
      renderTableBody={renderer.renderTableBody(dataFuncs, stateFuncs, () => {})}
      renderTableRow={renderer.renderTableRow(dataFuncs, stateFuncs, () => {})}
      renderTableCell={renderer.renderTableCell(dataFuncs, stateFuncs, getTableCellProps(dataFuncs, stateFuncs, eventFuncs))}
      renderTableHeader={renderer.renderTableHeader(dataFuncs, stateFuncs, () => {})}
      renderTableHeaderRow={renderer.renderTableHeaderRow(dataFuncs, stateFuncs, () => {})}
      renderTableHeaderCell={renderer.renderTableHeaderCell(dataFuncs, stateFuncs, () => {})}
    />
  </div>,
  document.getElementById('app'));
