import React from 'react';
import PureRenderMixin from 'react/lib/ReactComponentWithPureRenderMixin';
import {tableData$} from '../intents/table-data';
let Row = React.createClass({
  mixins: [PureRenderMixin],

  render: function () {
    let {
      totalrows,
      index,
      rowHeight,
      columnWidths,
      row
    } = this.props;

    let top = index * rowHeight;
    let trStyle = {
      position: 'absolute',
      top: top + 'px',
      width: '100%',
      borderBottom: '1px solid grey'
    };

    let nodes;
    if (row === undefined) {
      nodes = null;
    } else {

      nodes = columnWidths.map((width, i) => {
        return (
          <td key={i} style={{width: width + 'px'}}>
            {String(row[i])+ (i===0?  (" of " +totalrows):"")}
          </td>
        );
      });
    }

    return (
      <tr style={trStyle}>
        {nodes}
      </tr>
    );
  }
});

export default Row;
