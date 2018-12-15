/* eslint-disable complexity */

// utility functions

const utils = {};

// checkForId checks each team name as provided through data
// and if it matches one of the given team names, an ID and custom CSS
// styling is applied to that team's logo via React component

utils.checkForId = teamName => {
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
    return utils.generateId(teamName);
  }
};

utils.generateId = teamName => {
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
};

utils.generatePositionStatusClass = position => {
  if (position >= 1 && position <= 4) {
    return 'champions-league';
  } else if (position < 7) {
    return 'europa-league';
  } else if (position === 16) {
    return 'relegation-playoff';
  } else if (position === 17 || position === 18) {
    return 'relegation';
  }
};

export default utils;
