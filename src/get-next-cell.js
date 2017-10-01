export default (e, rowCount, columnCount, rowIdx, colIdx) => {
    switch (e.keyCode) {
      case 37: {
        if(colIdx > 0) {
          return { rowIdx, colIdx: colIdx - 1 };
        } else {
          return { rowIdx, colIdx };
        }
      }
      case 38: {
        if(rowIdx > 0) {
          return { rowIdx: rowIdx - 1, colIdx };
        } else {
          return { rowIdx, colIdx };
        }
      }
      case 39: {
        if(colIdx < columnCount - 1) {
          return { rowIdx, colIdx: colIdx + 1 };
        } else {
          return { rowIdx, colIdx };
        }
      }
      case 40: {
        if(rowIdx < rowCount - 1) {
          return { rowIdx: rowIdx + 1, colIdx };
        } else {
          return { rowIdx, colIdx };
        }
      }
      case 9: {
        e.preventDefault();
        if(colIdx < columnCount - 1) {
          return { rowIdx, colIdx: colIdx + 1 };
        } else if(colIdx === columnCount - 1 && rowIdx < rowCount - 1) {
          return { rowIdx: rowIdx + 1, colIdx: 0 };
        } else {
          return { rowIdx, colIdx };
        }
      }
      default:
        return { rowIdx, colIdx };
    }
  };
