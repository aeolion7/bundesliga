import React from 'react';
import utils from '../../server/utils';

const Team = props => {
  const teamName = utils.shortenName(props.team.name);
  return (
    <div className="team-info">
      <img
        id={utils.checkForId(teamName)}
        className="team-logo"
        src={'logos/' + utils.generateLogo(teamName)}
      />
      <p className="team-name">{teamName}</p>
    </div>
  );
};

export default Team;
