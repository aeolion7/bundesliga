import axios from 'axios';
import 'babel-polyfill';

// const CHANGE_MATCHDAY = 'CHANGE_MATCHDAY';
// const CHANGE_SEASON = 'CHANGE_SEASON';
const GOT_GAMES = 'GOT_GAMES';

// export const changeMatchday = matchday => ({
//   type: CHANGE_MATCHDAY,
//   matchday,
// });

// const changeSeason = season => ({
//   type: CHANGE_SEASON,
//   season,
// });

const gotGames = games => ({
  type: GOT_GAMES,
  games,
});

export const getGamesFromAPI = () => {
  return async dispatch => {
    const { data } = await axios.get(
      'https://api.football-data.org/v2/competitions/BL1/matches?matchday=13'
    );
    console.log(data);
  };
};

const initialState = {
  games: [],
  // selectedMatchday: '',
  // selectedSeason: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case CHANGE_MATCHDAY:
    //   return { ...state, selectedMatchday: action.matchday };
    // case CHANGE_SEASON:
    //   return { ...state, selectedSeason: action.season };
    case GOT_GAMES:
      return { ...state, games: action.games };
    default:
      return state;
  }
};

export default reducer;
