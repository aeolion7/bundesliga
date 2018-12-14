import React from 'react';
import Table from './Table';

const Sidebar = () => {
  return (
    <div id="sidebar">
      <img id="bundesliga-logo" src="logos/bundesliga.png" />
      <div>
        <h2>Matchday 13</h2>
        <h4>Season 2018-19</h4>
      </div>
      <hr />
      <Table />
    </div>
  );
};

export default Sidebar;
