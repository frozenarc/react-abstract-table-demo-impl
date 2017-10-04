import React from 'react';

import { Table, Input } from 'semantic-ui-react';

class InputTableCell extends React.Component {

  constructor() {
    super()
    this.inputRef = null;
  }

  render() {
    return (
      <Table.Cell {...this.props.tableCellProps} style={{ padding: 0 }}>
        <Input
          ref={(node) => {
            if(node) {
              this.inputRef = node.inputRef;
              node.focus();
            }
          }}
          fluid={true}
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
            }
          }}
          onBlur={(e) => {
            this.props.dataFuncs.setDataValue(this.props.rowIdx, this.props.colIdx, this.inputRef.value);
          }}
        />
      </Table.Cell>
    );
  }
}
export default InputTableCell;
