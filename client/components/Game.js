import React from 'react';
import Team from './Team';
import utils from '../../server/utils';

const Game = props => {
  return (
    <div
      className={props.orderId % 2 === 1 ? 'odd-game game' : 'even-game game'}
      id={`container-${props.orderId}`}
    >
      <div className="game-info">
        <p>{utils.generateDateString(props.date)}</p>
      </div>
      <div className="game-body">
        <Team team={props.homeTeam} />
        <div className="score">
          {props.score.homeTeam}-{props.score.awayTeam}
          <p className="halftime-score">
            ({props.scoreAtHalf.homeTeam}-{props.scoreAtHalf.awayTeam})
          </p>
        </div>
        <Team team={props.awayTeam} />
      </div>
      <div className="game-info">
        <p>Referee: {props.referee}</p>
      </div>
    </div>
  );
};

export default Game;
