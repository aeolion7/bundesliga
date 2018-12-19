/* eslint-disable complexity */

// utility functions

const utils = {};

// checkForId checks each team name as provided through data
// and if it matches one of the given team names, an ID and custom CSS
// styling is applied to that team's logo via React component

utils.checkForId = teamName => {
  switch (teamName) {
    case 'Bayer 04 Leverkusen':
      return 'leverkusen';
    case "Borussia M'Gladbach":
      return 'gladbach';
    case 'FC Augsburg':
      return 'augsburg';
    case 'Hamburger SV':
      return 'hamburg';
    case 'Hoffenheim':
      return 'hoffenheim';
    case 'RB Leipzig':
      return 'rb-leipzig';
    case 'SC Freiburg':
      return 'freiburg';
    case 'SV Werder Bremen':
      return 'bremen';
    case 'VfB Stuttgart':
      return 'stuttgart';
    default:
  }
};

utils.generateLogo = teamName => {
  switch (teamName) {
    case 'FC Augsburg':
      return 'augsburg.png';
    case 'FC Bayern München':
      return 'bayern.png';
    case 'Hertha BSC':
      return 'berlin.png';
    case 'SV Werder Bremen':
      return 'bremen.png';
    case 'Borussia Dortmund':
      return 'bvb.png';
    case 'Fortuna Düsseldorf':
      return 'dusseldorf.png';
    case 'Eintracht Frankfurt':
      return 'frankfurt.png';
    case 'SC Freiburg':
      return 'freiburg.png';
    case "Borussia M'Gladbach":
      return 'gladbach.png';
    case 'Hamburger SV':
      return 'hamburg.png';
    case 'Hannover 96':
      return 'hannover.png';
    case 'Hoffenheim':
      return 'hoffenheim.png';
    case '1. FC Köln':
      return 'koln.png';
    case 'Bayer 04 Leverkusen':
      return 'leverkusen.png';
    case '1. FSV Mainz 05':
      return 'mainz.png';
    case '1. FC Nürnberg':
      return 'nurnberg.png';
    case 'RB Leipzig':
      return 'rbleipzig.png';
    case 'FC Schalke 04':
      return 'schalke.png';
    case 'VfB Stuttgart':
      return 'stuttgart.png';
    case 'VfL Wolfsburg':
      return 'wolfsburg.png';
    default:
      return null;
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

utils.shortenName = teamName => {
  if (teamName === 'Borussia Mönchengladbach') {
    return "Borussia M'Gladbach";
  } else if (teamName === 'BV Borussia 09 Dortmund') {
    return 'Borussia Dortmund';
  } else if (teamName === 'TSG 1899 Hoffenheim') {
    return 'Hoffenheim';
  } else if (teamName === 'TSV Fortuna 95 Düsseldorf') {
    return 'Fortuna Düsseldorf';
  } else {
    return teamName;
  }
};

export default utils;
