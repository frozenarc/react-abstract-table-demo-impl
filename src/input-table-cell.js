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
          defaultValue={this.props.getDataValue()}
          onKeyDown={(e) => {
            e.stopPropagation();
          }}
          onBlur={(e) => {
            this.props.setDataValue(this.inputRef.value);
          }}
        />
      </Table.Cell>
    );
  }
}
export default InputTableCell;
