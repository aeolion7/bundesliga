import React from 'react';
import { standings } from '../../data/md13';
import TableRow from './TableRow';

let placeId = 1;

const Table = () => (
  <table>
    <tbody>
      {standings.map(teamObj => {
        return (
          <TableRow
            key={placeId++}
            team={teamObj.team}
            points={teamObj.points}
            logo={teamObj.logo}
          />
        );
      })}
    </tbody>
  </table>
);

export default Table;
