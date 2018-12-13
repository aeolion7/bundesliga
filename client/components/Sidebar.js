import React from 'react';
import Table from './Table';

const Sidebar = () => {
  return (
    <div id="sidebar">
      <img id="bundesliga-logo" src="logos/bundesliga.png" />
      <div>
        <h1>Matchday 13</h1>
        <h3>Season 2018-19</h3>
      </div>
      <Table />
    </div>
  );
};

export default Sidebar;
