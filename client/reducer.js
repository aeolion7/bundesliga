import axios from 'axios';
import 'babel-polyfill';
import { API_TOKEN } from '../secrets';

const GOT_GAMES = 'GOT_GAMES';
const GOT_TABLE = 'GOT_TABLE';

const gotGames = games => ({
  type: GOT_GAMES,
  games,
});

const gotTable = table => ({
  type: GOT_TABLE,
  table,
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

export const getTableFromAPI = () => {
  return async dispatch => {
    const { data } = await axios.get(
      'https://api.football-data.org/v2/competitions/BL1/standings',
      {
        headers: {
          'X-Auth-Token': API_TOKEN,
        },
      }
    );
    const table = data.standings[0].table;
    dispatch(gotTable(table));
  };
};

const initialState = {
  games: [],
  table: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_GAMES:
      return { ...state, games: action.games };
    case GOT_TABLE:
      return { ...state, table: action.table };
    default:
      return state;
  }
};

export default reducer;
