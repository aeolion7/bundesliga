import React from 'react';

const TableRow = props => {
  return (
    <tr>
      <td className="table-team">{props.team}</td>
      <td className="table-points">{props.points}</td>
    </tr>
  );
};

export default TableRow;
