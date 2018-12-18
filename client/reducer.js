import axios from 'axios';
import 'babel-polyfill';
import { API_TOKEN } from '../secrets';

const CHANGE_MATCHDAY = 'CHANGE_MATCHDAY';
const CHANGE_SEASON = 'CHANGE_SEASON';
const GOT_GAMES = 'GOT_GAMES';

export const changeMatchday = matchday => ({
  type: CHANGE_MATCHDAY,
  matchday,
});

export const changeSeason = season => ({
  type: CHANGE_SEASON,
  season,
});

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
    console.log(data);
  };
};

const initialState = {
  games: [],
  selectedMatchday: '',
  selectedSeason: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MATCHDAY:
      return { ...state, selectedMatchday: action.matchday };
    case CHANGE_SEASON:
      return { ...state, selectedSeason: action.season };
    case GOT_GAMES:
      return { ...state, games: action.games };
    default:
      return state;
  }
};

export default reducer;
