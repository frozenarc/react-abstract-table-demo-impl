export const getHeaderRowCount = (data) => () => {
  return data.columnRows.length;
};

export const getHeaderCellCount = (data) => (rowIdx) => {
  return data.columnRows[rowIdx].length;
};

export const getDataRowCount = (data) => () => {
  return data.rows.length;
};

export const getDataCellCount = (data) => (rowIdx) => {
  return getHeaderCellCount(data)(getHeaderRowCount(data)() - 1);
};

export const getHeaderValue = (data) => (rowIdx, colIdx) => {
  return data.columnRows[rowIdx][colIdx].name;
};

export const getHeaderProperty = (data) => (rowIdx, colIdx, property) => {
  return data.columnRows[rowIdx][colIdx][property];
}

export const getColumnName = (data) => (colIdx) => {
  return getHeaderValue(data)(getHeaderRowCount(data)() - 1, colIdx);
};

export const getDataValue = (data) => (rowIdx, colIdx) => {
  return data.rows[rowIdx][getColumnName(data)(colIdx)];
};

export const getDataFunctions = (data) => {
  return {
      getHeaderRowCount: getHeaderRowCount(data),
      getHeaderCellCount: getHeaderCellCount(data),
      getDataRowCount: getDataRowCount(data),
      getDataCellCount: getDataCellCount(data),
      getHeaderValue: getHeaderValue(data),
      getHeaderProperty: getHeaderProperty(data),
      getColumnName: getColumnName(data),
      getDataValue: getDataValue(data)
  }
}
