import React from 'react';
import Table from './Table';

const Sidebar = () => {
  return (
    <div id="sidebar">
      <img id="bundesliga-logo" src="logos/bundesliga.png" />
      <div id="selectors">
        <h3>
          <>
            Season
            <select>
              <option>2018-19</option>
            </select>
          </>
        </h3>
        <h3>
          <>
            Matchday
            <select>
              <option>13</option>
            </select>
          </>
        </h3>
      </div>
      <hr />
      <Table />
    </div>
  );
};

export default Sidebar;
