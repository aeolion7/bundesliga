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

{
  /* <div className="odd-game game" id="container-1">
        <div className="game-info">
          <p>Friday, November 30, 2018, 2:30 PM</p>
        </div>
        <div className="game-body">
          <img className="team-logo" src="logos/dusseldorf.png" />
          <div className="score">0-1</div>
          <img className="team-logo" src="logos/mainz.png" />
        </div>
        <div className="game-info">
          <p>Merkur Spiel-Arena, Düsseldorf</p>
        </div>
      </div>
      <div className="even-game game" id="container-2">
        <div className="game-info">
          <p>Saturday, December 1, 2018, 9:30 AM</p>
        </div>
        <div className="game-body">
          <img className="team-logo" src="logos/hannover.png" />
          <div className="score">0-2</div>
          <img className="team-logo" src="logos/berlin.png" />
        </div>
        <div className="game-info">
          <p>HDI-Arena, Hanover</p>
        </div>
      </div>
      <div className="odd-game game" id="container-3">
        <div className="game-info">
          <p>Saturday, December 1, 2018, 9:30 AM</p>
        </div>
        <div className="game-body">
          <img id="bremen" className="team-logo" src="logos/bremen.png" />
          <div className="score">1-2</div>
          <img className="team-logo" src="logos/bayern.png" />
        </div>
        <div className="game-info">
          <p>Weserstadion, Bremen</p>
        </div>
      </div>
      <div className="even-game game" id="container-4">
        <div className="game-info">
          <p>Saturday, December 1, 2018, 9:30 AM</p>
        </div>
        <div className="game-body">
          <img id="stuttgart" className="team-logo" src="logos/stuttgart.png" />
          <div className="score">1-0</div>
          <img id="augsburg" className="team-logo" src="logos/augsburg.png" />
        </div>
        <div className="game-info">
          <p>Mercedes-Benz-Arena, Stuttgart</p>
        </div>
      </div>
      <div className="odd-game game" id="container-5">
        <div className="game-info">
          <p>Saturday, December 1, 2018, 9:30 AM</p>
        </div>
        <div className="game-body">
          <img className="team-logo" src="logos/bvb.png" />
          <div className="score">2-0</div>
          <img id="freiburg" className="team-logo" src="logos/freiburg.png" />
        </div>
        <div className="game-info">
          <p>Signal Iduna Park, Dortmund</p>
        </div>
      </div>
      <div className="even-game game" id="container-6">
        <div className="game-info">
          <p>Saturday, December 1, 2018, 12:30 PM</p>
        </div>
        <div className="game-body">
          <img
            id="hoffenheim"
            className="team-logo"
            src="logos/hoffenheim.png"
          />
          <div className="score">1-1</div>
          <img className="team-logo" src="logos/schalke.png" />
        </div>
        <div className="game-info">
          <p>WIRSOL Rhein-Neckar-Arena, Sinsheim</p>
        </div>
      </div>
      <div className="odd-game game" id="container-7">
        <div className="game-info">
          <p>Sunday, December 2, 2018, 9:30 AM</p>
        </div>
        <div className="game-body">
          <img
            id="rb-leipzig"
            className="team-logo"
            src="logos/rbleipzig.png"
          />
          <div className="score">2-0</div>
          <img id="gladbach" className="team-logo" src="logos/gladbach.png" />
        </div>
        <div className="game-info">
          <p>Red Bull Arena, Leipzig</p>
        </div>
      </div>
      <div className="even-game game" id="container-8">
        <div className="game-info">
          <p>Sunday, December 2, 2018, 12:00 PM</p>
        </div>
        <div className="game-body">
          <img className="team-logo" src="logos/frankfurt.png" />
          <div className="score">1-2</div>
          <img className="team-logo" src="logos/wolfsburg.png" />
        </div>
        <div className="game-info">
          <p>Commerzbank-Arena, Frankfurt am Main</p>
        </div>
      </div>
      <div className="odd-game game" id="container-9">
        <div className="game-info">
          <p>Monday, December 3, 2018, 2:30 PM</p>
        </div>
        <div className="game-body">
          <img className="team-logo" src="logos/nurnberg.png" />
          <div className="score">1-1</div>
          <img
            id="leverkusen"
            className="team-logo"
            src="logos/leverkusen.png"
          />
        </div>
        <div className="game-info">
          <p>Max-Morlock-Stadion, Nürnberg</p>
        </div>
      </div> */
}
