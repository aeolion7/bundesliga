/* eslint-disable complexity */
import React from 'react';

// checkForId checks each team name as provided through data
// and if it matches one of the given team names, custom CSS
// styling is applied to that team's logo

function checkForId(teamName) {
  // don't run the switch if the team isn't in it
  if (
    teamName === 'Bayer 04 Leverkusen' ||
    teamName === 'Borussia Mönchengladbach' ||
    teamName === 'FC Augsburg' ||
    teamName === 'RB Leipzig' ||
    teamName === 'TSV 1899 Hoffenheim' ||
    teamName === 'SC Freiburg' ||
    teamName === 'SV Werder Bremen' ||
    teamName === 'VfB Stuttgart'
  ) {
    return generateId(teamName);
  }
}

function generateId(teamName) {
  switch (teamName) {
    case 'Bayer 04 Leverkusen':
      return 'leverkusen';
    case 'Borussia Mönchengladbach':
      return 'gladbach';
    case 'FC Augsburg':
      return 'augsburg';
    case 'RB Leipzig':
      return 'rb-leipzig';
    case 'TSV 1899 Hoffenheim':
      return 'hoffenheim';
    case 'SC Freiburg':
      return 'freiburg';
    case 'SV Werder Bremen':
      return 'bremen';
    case 'VfB Stuttgart':
      return 'stuttgart';
    default:
  }
}

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
        <div className="team-info">
          <img
            id={checkForId(props.homeTeam.name)}
            className="team-logo"
            src={props.homeTeam.logo}
          />
          <p className="team-name">{props.homeTeam.name}</p>
        </div>
        <div className="score">
          {props.homeTeam.goals}-{props.awayTeam.goals}
        </div>
        <div className="team-info">
          <img
            id={checkForId(props.awayTeam.name)}
            className="team-logo"
            src={props.awayTeam.logo}
          />
          <p className="team-name">{props.awayTeam.name}</p>
        </div>
      </div>
      <div className="game-info">
        <p>{props.stadium}</p>
      </div>
    </div>
  );
};

export default Game;
