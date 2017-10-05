import React from 'react';

class InputTableCell extends React.Component {

  constructor() {
    super()
    this.inputRef = null;
  }

  render() {
    return (
      <td {...this.props.tableCellProps} style={{ padding: 0 }}>
        <div className="ui input fluid">
        <input
          ref={(node) => {
            if(node) {
              this.inputRef = node;
              node.focus();
            }
          }}
          defaultValue={this.props.dataFuncs.getDataValue(this.props.rowIdx, this.props.colIdx)}
          onKeyDown={(e) => {
            e.stopPropagation();
            if(e.keyCode === 13) {
              this.props.dataFuncs.setDataValue(this.props.rowIdx, this.props.colIdx, this.inputRef.value);
              this.props.tableCell.getTable().setState(this.props.stateFuncs.getClonedState({
                rowIdx: this.props.rowIdx,
                colIdx: this.props.colIdx,
                click: true, editing: false
              }));
              this.props.tableCell.getTable().getInfo("tableRef").focus();
            }
          }}
          onBlur={(e) => {
            this.props.dataFuncs.setDataValue(this.props.rowIdx, this.props.colIdx, this.inputRef.value);
          }}
        />
      </div>
    </td>
    );
  }
}
export default InputTableCell;
