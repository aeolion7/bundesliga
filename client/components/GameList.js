import React, { Component } from 'react';
import { gameInfo } from '../../data/md13';
import Game from './Game';
import { connect } from 'react-redux';
import store from '../store';

class GameList extends Component {
  render() {
    const { games } = store.getState();
    // TODO: change score styling to include game.halfTime
    return (
      <div id="display">
        {games.map((game, index) => {
          return (
            <Game
              key={game.id}
              awayTeam={game.awayTeam}
              date={game.utcDate}
              homeTeam={game.homeTeam}
              orderId={index + 1}
              score={game.score.fullTime}
              stadium={game.stadium}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  games: state.games
});

export default connect(mapStateToProps)(GameList);
