/* eslint-disable complexity */
import React from 'react';
import { gameInfo } from '../../data/md13';

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

const GameList = () => {
  return (
    <div id="display">
      {gameInfo.map(game => {
        return (
          <div
            className={
              game.orderId % 2 === 1 ? 'odd-game game' : 'even-game game'
            }
            id={`container-${game.orderId}`}
            key={game.orderId}
          >
            <div className="game-info">
              <p>{game.date}</p>
            </div>
            <div className="game-body">
              <div className="team-info">
                <img
                  id={checkForId(game.homeTeam.name)}
                  className="team-logo"
                  src={game.homeTeam.logo}
                />
                <p className="team-name">{game.homeTeam.name}</p>
              </div>
              <div className="score">
                {game.homeTeam.goals}-{game.awayTeam.goals}
              </div>
              <div className="team-info">
                <img
                  id={checkForId(game.awayTeam.name)}
                  className="team-logo"
                  src={game.awayTeam.logo}
                />
                <p className="team-name">{game.awayTeam.name}</p>
              </div>
            </div>
            <div className="game-info">
              <p>{game.stadium}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GameList;
