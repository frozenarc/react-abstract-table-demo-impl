import React from 'react';
import { Table } from 'semantic-ui-react';

export const renderTable = (dataFuncs, stateFuncs, getTableProps) => (children, table) => {
  return (
    <Table {...getTableProps(table)}>
      {children}
    </Table>
  );
};

export const renderTableBody = (dataFuncs, stateFuncs, getTableBodyProps) => (children, tableBody) => {
  return (
    <Table.Body {...getTableBodyProps(tableBody)}>
      {children}
    </Table.Body>
  );
};

export const renderTableRow = (dataFuncs, stateFuncs, getTableRowProps) => (rowIdx, children, tableRow) => {
  return (
    <Table.Row {...getTableRowProps(rowIdx, tableRow)}>
      {children}
    </Table.Row>
  );
};

export const renderTableCell = (dataFuncs, stateFuncs, getTableCellProps) => (rowIdx, colIdx, tableCell) => {
  return (
    <Table.Cell {...getTableCellProps(rowIdx, colIdx, tableCell)}>
      {dataFuncs.getDataValue(rowIdx, colIdx)}
    </Table.Cell>
  );
};

export const renderTableHeader = (dataFuncs, stateFuncs, getTableHeaderProps) => (children, tableHeader) => {
  return (
    <Table.Header {...getTableHeaderProps(tableHeader)}>
      {children}
    </Table.Header>
  );
};

export const renderTableHeaderRow = (dataFuncs, stateFuncs, getTableHeaderRowProps) => (rowIdx, children, tableHeaderRow) => {
  return (
    <Table.Row {...getTableHeaderRowProps(rowIdx, tableHeaderRow)}>
      {children}
    </Table.Row>
  );
};

export const renderTableHeaderCell = (dataFuncs, stateFuncs, getTableHeaderCellProps) => (rowIdx, colIdx, tableHeaderCell) => {
  return (
    <Table.HeaderCell {...getTableHeaderCellProps(rowIdx, colIdx, tableHeaderCell)}>
      {dataFuncs.getHeaderValue(rowIdx, colIdx)}
    </Table.HeaderCell>
  );
};
