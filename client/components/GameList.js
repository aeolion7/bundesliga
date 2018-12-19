import React, { Component } from 'react';
import Game from './Game';
import { connect } from 'react-redux';
import store from '../store';

class GameList extends Component {
  render() {
    const { games } = store.getState();
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
              scoreAtHalf={game.score.halfTime}
              referee={
                (game.referees[0] && game.referees[0].name) ||
                'Unknown'
              }
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  games: state.games,
});

export default connect(mapStateToProps)(GameList);
