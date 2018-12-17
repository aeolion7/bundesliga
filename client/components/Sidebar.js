import React from 'react';
import Table from './Table';
import SelectorForm from './SelectorForm';

const Sidebar = () => {
  return (
    <div id="sidebar">
      <img id="bundesliga-logo" src="logos/bundesliga.png" />
      <SelectorForm />
      <Table />
    </div>
  );
};

export default Sidebar;
