/*
The function is required for `react-abstract-table`.
*/
export const getHeaderRowCount = (data) => () => {
  return data.columnRows.length;
};

/*
The function is required for `react-abstract-table`.
*/
export const getHeaderCellCount = (data) => (rowIdx) => {
  return data.columnRows[rowIdx].length;
};

/*
The function is required for `react-abstract-table`.
*/
export const getDataRowCount = (data) => () => {
  return data.rows.length;
};

/*
The function is required for `react-abstract-table`.
*/
export const getDataCellCount = (data) => (rowIdx) => {
  return getHeaderCellCount(data)(getHeaderRowCount(data)() - 1);
};

/*
The function is required for `Rendering` module and may required for other module too.
*/
export const getHeaderValue = (data) => (rowIdx, colIdx) => {
  return data.columnRows[rowIdx][colIdx].name;
};

/*
The function is required for `Rendering` module and may required for other module too.
*/
export const getHeaderProperty = (data) => (rowIdx, colIdx, property) => {
  return data.columnRows[rowIdx][colIdx][property];
}

/*
The function is required for `Rendering` module and may required for other module too.
*/
export const getColumnName = (data) => (colIdx) => {
  return getHeaderValue(data)(getHeaderRowCount(data)() - 1, colIdx);
};

/*
The function is required for `Rendering` module and may required for other module too.
*/
export const getDataValue = (data) => (rowIdx, colIdx) => {
  return data.rows[rowIdx][getColumnName(data)(colIdx)];
};

export const setDataValue = (data) => (rowIdx, colIdx, value) => {
  data.rows[rowIdx][getColumnName(data)(colIdx)] = value;
}

export const getDataFunctions = (data) => {
  return {
      getHeaderRowCount: getHeaderRowCount(data),
      getHeaderCellCount: getHeaderCellCount(data),
      getDataRowCount: getDataRowCount(data),
      getDataCellCount: getDataCellCount(data),
      getHeaderValue: getHeaderValue(data),
      getHeaderProperty: getHeaderProperty(data),
      getColumnName: getColumnName(data),
      getDataValue: getDataValue(data),
      setDataValue: setDataValue(data)
  }
}
