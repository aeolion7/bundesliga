import React from 'react';
import { gameInfo } from '../../data/md13';

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
              <img className="team-logo" src={game.homeTeam.logo} />
              <div className="score">
                {game.homeTeam.goals}-{game.awayTeam.goals}
              </div>
              <img className="team-logo" src={game.awayTeam.logo} />
            </div>
            <div className="game-info">
              <p>{game.stadium}</p>
            </div>
          </div>
        );
      })}
      {/* <div className="odd-game game" id="container-1">
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
      </div> */}
    </div>
  );
};

export default GameList;
