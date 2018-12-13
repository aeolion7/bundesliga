import React from 'react';

const Main = () => {
  return (
    <>
      <div id="sidebar">
        <img id="bundesliga-logo" src="logos/bundesliga.png" />
        <div>
          <h1>Matchday 13</h1>
          <h3>Season 2018-19</h3>
        </div>
        <table id="table">
          <tbody>
            <tr>
              <td class="table-team">BVB</td>
              <td class="table-points">33</td>
            </tr>
            <tr>
              <td class="table-team">BMG</td>
              <td class="table-points">26</td>
            </tr>
            <tr>
              <td class="table-team">RBL</td>
              <td class="table-points">25</td>
            </tr>
            <tr>
              <td class="table-team">FCB</td>
              <td class="table-points">24</td>
            </tr>
            <tr>
              <td class="table-team">Borussia Dortmund</td>
              <td class="table-points">33</td>
            </tr>
            <tr>
              <td class="table-team">Borussia Dortmund</td>
              <td class="table-points">33</td>
            </tr>
            <tr>
              <td class="table-team">Borussia Dortmund</td>
              <td class="table-points">33</td>
            </tr>
            <tr>
              <td class="table-team">Borussia Dortmund</td>
              <td class="table-points">33</td>
            </tr>
            <tr>
              <td class="table-team">Borussia Dortmund</td>
              <td class="table-points">33</td>
            </tr>
            <tr>
              <td class="table-team">Borussia Dortmund</td>
              <td class="table-points">33</td>
            </tr>
            <tr>
              <td class="table-team">Borussia Dortmund</td>
              <td class="table-points">33</td>
            </tr>
            <tr>
              <td class="table-team">Borussia Dortmund</td>
              <td class="table-points">33</td>
            </tr>
            <tr>
              <td class="table-team">Borussia Dortmund</td>
              <td class="table-points">33</td>
            </tr>
            <tr>
              <td class="table-team">Borussia Dortmund</td>
              <td class="table-points">33</td>
            </tr>
            <tr>
              <td class="table-team">Borussia Dortmund</td>
              <td class="table-points">33</td>
            </tr>
            <tr>
              <td class="table-team">Borussia Dortmund</td>
              <td class="table-points">33</td>
            </tr>
            <tr>
              <td class="table-team">Borussia Dortmund</td>
              <td class="table-points">33</td>
            </tr>
            <tr>
              <td class="table-team">Borussia Dortmund</td>
              <td class="table-points">33</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="display">
        <div class="odd-game game" id="container-1">
          <div class="game-info">
            <p>Friday, November 30, 2018, 2:30 PM</p>
          </div>
          <div class="game-body">
            <img class="team-logo" src="./logos/dusseldorf.png" />
            <div class="score">0-1</div>
            <img class="team-logo" src="./logos/mainz.png" />
          </div>
          <div class="game-info">
            <p>Merkur Spiel-Arena, Düsseldorf</p>
          </div>
        </div>
        <div class="even-game game" id="container-2">
          <div class="game-info">
            <p>Saturday, December 1, 2018, 9:30 AM</p>
          </div>
          <div class="game-body">
            <img class="team-logo" src="./logos/hanover.png" />
            <div class="score">0-2</div>
            <img class="team-logo" src="./logos/berlin.png" />
          </div>
          <div class="game-info">
            <p>HDI-Arena, Hanover</p>
          </div>
        </div>
        <div class="odd-game game" id="container-3">
          <div class="game-info">
            <p>Saturday, December 1, 2018, 9:30 AM</p>
          </div>
          <div class="game-body">
            <img id="bremen" class="team-logo" src="./logos/bremen.png" />
            <div class="score">1-2</div>
            <img class="team-logo" src="./logos/bayern.png" />
          </div>
          <div class="game-info">
            <p>Weserstadion, Bremen</p>
          </div>
        </div>
        <div class="even-game game" id="container-4">
          <div class="game-info">
            <p>Saturday, December 1, 2018, 9:30 AM</p>
          </div>
          <div class="game-body">
            <img id="stuttgart" class="team-logo" src="./logos/stuttgart.png" />
            <div class="score">1-0</div>
            <img id="augsburg" class="team-logo" src="./logos/augsburg.png" />
          </div>
          <div class="game-info">
            <p>Mercedes-Benz-Arena, Stuttgart</p>
          </div>
        </div>
        <div class="odd-game game" id="container-5">
          <div class="game-info">
            <p>Saturday, December 1, 2018, 9:30 AM</p>
          </div>
          <div class="game-body">
            <img class="team-logo" src="./logos/bvb.png" />
            <div class="score">2-0</div>
            <img id="freiburg" class="team-logo" src="./logos/freiburg.png" />
          </div>
          <div class="game-info">
            <p>Signal Iduna Park, Dortmund</p>
          </div>
        </div>
        <div class="even-game game" id="container-6">
          <div class="game-info">
            <p>Saturday, December 1, 2018, 12:30 PM</p>
          </div>
          <div class="game-body">
            <img
              id="hoffenheim"
              class="team-logo"
              src="./logos/hoffenheim.png"
            />
            <div class="score">1-1</div>
            <img class="team-logo" src="./logos/schalke.png" />
          </div>
          <div class="game-info">
            <p>WIRSOL Rhein-Neckar-Arena, Sinsheim</p>
          </div>
        </div>
        <div class="odd-game game" id="container-7">
          <div class="game-info">
            <p>Sunday, December 2, 2018, 9:30 AM</p>
          </div>
          <div class="game-body">
            <img
              id="rb-leipzig"
              class="team-logo"
              src="./logos/rbleipzig.png"
            />
            <div class="score">2-0</div>
            <img id="gladbach" class="team-logo" src="./logos/gladbach.png" />
          </div>
          <div class="game-info">
            <p>Red Bull Arena, Leipzig</p>
          </div>
        </div>
        <div class="even-game game" id="container-8">
          <div class="game-info">
            <p>Sunday, December 2, 2018, 12:00 PM</p>
          </div>
          <div class="game-body">
            <img class="team-logo" src="./logos/frankfurt.png" />
            <div class="score">1-2</div>
            <img class="team-logo" src="./logos/wolfsburg.png" />
          </div>
          <div class="game-info">
            <p>Commerzbank-Arena, Frankfurt am Main</p>
          </div>
        </div>
        <div class="odd-game game" id="container-9">
          <div class="game-info">
            <p>Monday, December 3, 2018, 2:30 PM</p>
          </div>
          <div class="game-body">
            <img class="team-logo" src="./logos/nurnberg.png" />
            <div class="score">1-1</div>
            <img
              id="leverkusen"
              class="team-logo"
              src="./logos/leverkusen.png"
            />
          </div>
          <div class="game-info">
            <p>Max-Morlock-Stadion, Nürnberg</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
