import React from 'react';
import Table from './Table';

const Sidebar = () => {
  return (
    <div id="sidebar">
      <img id="bundesliga-logo" src="logos/bundesliga.png" />
      <div id="selectors">
        <div>
          <>
            Season
            <select>
              <option>2018-19</option>
            </select>
          </>
        </div>
        <div>
          <>
            Matchday
            <select>
              <option>13</option>
            </select>
          </>
        </div>
      </div>
      <div id="table">
        <Table />
      </div>
    </div>
  );
};

export default Sidebar;
