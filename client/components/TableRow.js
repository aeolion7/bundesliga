import React from 'react';

let tablePosition = 1;

const TableRow = props => {
  return (
    <tr>
      <td>{tablePosition++}.</td>
      <td>
        <img className="table-logo" src={props.logo} />
      </td>
      <td className="table-team">{props.team}</td>
      <td className="table-points">{props.points}</td>
    </tr>
  );
};

export default TableRow;
