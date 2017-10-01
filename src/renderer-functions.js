import React from 'react';
import { Table } from 'semantic-ui-react';

export const renderTable = (dataFuncs, stateFuncs, getProps) => (children, table) => {
  return (
    <Table {...getProps(table)}>
      {children}
    </Table>
  );
};

export const renderTableBody = (dataFuncs, stateFuncs, getProps) => (children, tableBody) => {
  return (
    <Table.Body {...getProps(tableBody)}>
      {children}
    </Table.Body>
  );
};

export const renderTableRow = (dataFuncs, stateFuncs, getProps) => (rowIdx, children, tableRow) => {
  return (
    <Table.Row {...getProps(rowIdx, tableRow)}>
      {children}
    </Table.Row>
  );
};

export const renderTableCell = (dataFuncs, stateFuncs, getProps) => (rowIdx, colIdx, tableCell) => {
  return (
    <Table.Cell {...getProps(rowIdx, colIdx, tableCell)}>
      {dataFuncs.getDataValue(rowIdx, colIdx)}
    </Table.Cell>
  );
};

export const renderTableHeader = (dataFuncs, stateFuncs, getProps) => (children, tableHeader) => {
  return (
    <Table.Header {...getProps(tableHeader)}>
      {children}
    </Table.Header>
  );
};

export const renderTableHeaderRow = (dataFuncs, stateFuncs, getProps) => (rowIdx, children, tableHeaderRow) => {
  return (
    <Table.Row {...getProps(rowIdx, tableHeaderRow)}>
      {children}
    </Table.Row>
  );
};

export const renderTableHeaderCell = (dataFuncs, stateFuncs, getProps) => (rowIdx, colIdx, tableHeaderCell) => {
  return (
    <Table.HeaderCell {...getProps(rowIdx, colIdx, tableHeaderCell)}>
      {dataFuncs.getHeaderValue(rowIdx, colIdx)}
    </Table.HeaderCell>
  );
};
