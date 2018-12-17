import React from 'react';
import Sidebar from './Sidebar';
import GameList from './GameList';
import { Provider } from 'react-redux';

const Main = () => {
  return (
    <>
      <Sidebar />
      <GameList />
    </>
  );
};

export default Main;
