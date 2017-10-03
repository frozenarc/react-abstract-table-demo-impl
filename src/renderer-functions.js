import React from 'react';
import { Table } from 'semantic-ui-react';
import InputTableCell from './input-table-cell';


/*
The higher order function gets `dataFuncs`, `stateFuncs` and `getTableProps` as parameter
and returns a function which can be pass to `Table` component.

`dataFuncs` is a object of functions. It uses to get all data related information like row count, cell count of some row, value at some row index and column index,
header at some some header row index and header column index, etc. And it can be also use to set value to some row index and column index.

`stateFuncs` is object of functions. It uses to get initial state or cloned state.

`getTableProps` is a function which retunrs props of `Table (of semantic-ui-react)`. e.g. style, onClick, etc.

*/
export const renderTable = (dataFuncs, stateFuncs, getTableProps) => (children, table) => {
  return (
    <Table {...getTableProps(table)}>
      {children}
    </Table>
  );
};

/*
The higher order function gets `dataFuncs`, `stateFuncs` and `getTableBodyProps` as parameter
and returns a function which can be pass to `Table` component.

`getTableBodyProps` is a function which retunrs props of `Table.Body (of semantic-ui-react)`. e.g. style, onClick, etc.

*/
export const renderTableBody = (dataFuncs, stateFuncs, getTableBodyProps) => (children, tableBody) => {
  return (
    <Table.Body {...getTableBodyProps(tableBody)}>
      {children}
    </Table.Body>
  );
};

/*
The higher order function gets `dataFuncs`, `stateFuncs` and `getTableRowProps` as parameter
and returns a function which can be pass to `Table` component.

`getTableRowProps` is a function which retunrs props of `Table.Row (of semantic-ui-react)`. e.g. style, onClick, etc.

*/
export const renderTableRow = (dataFuncs, stateFuncs, getTableRowProps) => (rowIdx, children, tableRow) => {
  return (
    <Table.Row {...getTableRowProps(rowIdx, tableRow)}>
      {children}
    </Table.Row>
  );
};

/*
The higher order function gets `dataFuncs`, `stateFuncs` and `getTableCellProps` as parameter
and returns a function which can be pass to `Table` component.

`getTableCellProps` is a function which retunrs props of `Table.Cell (of semantic-ui-react)`. e.g. style, onClick, etc.

*/
export const renderTableCell = (dataFuncs, stateFuncs, getTableCellProps) => (rowIdx, colIdx, tableCell) => {
  if(stateFuncs.isCellEditing(tableCell.getTable().getState(), rowIdx, colIdx)) {
    return (
      <InputTableCell
        tableCellProps={getTableCellProps(rowIdx, colIdx, tableCell)}
        setDataValue={(value) => { dataFuncs.setDataValue(rowIdx, colIdx, value); }}
        getDataValue={() => dataFuncs.getDataValue(rowIdx, colIdx)} />
    );
  } else {
    return (
      <Table.Cell {...getTableCellProps(rowIdx, colIdx, tableCell)}>
        {dataFuncs.getDataValue(rowIdx, colIdx)}
      </Table.Cell>
    );
  }
};

/*
The higher order function gets `dataFuncs`, `stateFuncs` and `getTableHeaderProps` as parameter
and returns a function which can be pass to `Table` component.

`getTableHeaderProps` is a function which retunrs props of `Table.Header (of semantic-ui-react)`. e.g. style, onClick, etc.

*/
export const renderTableHeader = (dataFuncs, stateFuncs, getTableHeaderProps) => (children, tableHeader) => {
  return (
    <Table.Header {...getTableHeaderProps(tableHeader)}>
      {children}
    </Table.Header>
  );
};

/*
The higher order function gets `dataFuncs`, `stateFuncs` and `getTableHeaderRowProps` as parameter
and returns a function which can be pass to `Table` component.

`getTableHeaderRowProps` is a function which retunrs props of `Table.Row (of semantic-ui-react)`. e.g. style, onClick, etc.

*/
export const renderTableHeaderRow = (dataFuncs, stateFuncs, getTableHeaderRowProps) => (rowIdx, children, tableHeaderRow) => {
  return (
    <Table.Row {...getTableHeaderRowProps(rowIdx, tableHeaderRow)}>
      {children}
    </Table.Row>
  );
};

/*
The higher order function gets `dataFuncs`, `stateFuncs` and `getTableHeaderCellProps` as parameter
and returns a function which can be pass to `Table` component.

`getTableHeaderCellProps` is a function which retunrs props of `Table.HeaderCell (of semantic-ui-react)`. e.g. style, onClick, etc.

*/
export const renderTableHeaderCell = (dataFuncs, stateFuncs, getTableHeaderCellProps) => (rowIdx, colIdx, tableHeaderCell) => {
  return (
    <Table.HeaderCell {...getTableHeaderCellProps(rowIdx, colIdx, tableHeaderCell)}>
      {dataFuncs.getHeaderValue(rowIdx, colIdx)}
    </Table.HeaderCell>
  );
};
