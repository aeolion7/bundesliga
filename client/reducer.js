import axios from 'axios';
import 'babel-polyfill';
import { API_TOKEN } from '../secrets';

const GOT_GAMES = 'GOT_GAMES';

const gotGames = games => ({
  type: GOT_GAMES,
  games,
});

export const getGamesFromAPI = (seasonId, matchdayId) => {
  return async dispatch => {
    const { data } = await axios.get(
      `https://api.football-data.org/v2/competitions/BL1/matches?season=${seasonId}&matchday=${matchdayId}`,
      {
        headers: {
          'X-Auth-Token': API_TOKEN,
        },
      }
    );
    const { matches } = data;
    dispatch(gotGames(matches));
  };
};

const initialState = {
  games: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_GAMES:
      return { ...state, games: action.games };
    default:
      return state;
  }
};

export default reducer;
