import React from 'react';
import { gameInfo } from '../../data/md13';
import Game from './Game';

const GameList = () => {
  return (
    <div id="display">
      {gameInfo.map(game => {
        return (
          <Game
            key={game.orderId}
            awayTeam={game.awayTeam}
            date={game.date}
            homeTeam={game.homeTeam}
            orderId={game.orderId}
            stadium={game.stadium}
          />
        );
      })}
    </div>
  );
};

export default GameList;
