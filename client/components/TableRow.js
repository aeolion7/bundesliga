import React from 'react';
import utils from '../../server/utils';

const TableRow = props => {
  return (
    <tr>
      <td className={utils.generatePositionStatusClass(props.position)}>
        {props.position}.
      </td>
      <td>
        <img className="table-logo" src={props.logo} />
      </td>
      <td className="table-team">{props.team}</td>
      <td className="table-points">{props.points}</td>
    </tr>
  );
};

export default TableRow;
