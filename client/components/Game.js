import React from 'react';
import Team from './Team';

const Game = props => {
  return (
    <div
      className={props.orderId % 2 === 1 ? 'odd-game game' : 'even-game game'}
      id={`container-${props.orderId}`}
    >
      <div className="game-info">
        <p>{props.date}</p>
      </div>
      <div className="game-body">
        <Team team={props.homeTeam} />
        <div className="score">
          {props.score.homeTeam}-{props.score.awayTeam}
        </div>
        <Team team={props.awayTeam} />
      </div>
      <div className="game-info">
        <p>{props.stadium}</p>
      </div>
    </div>
  );
};

export default Game;
