import React from 'react';
import utils from '../../server/utils';

const Team = props => {
  return (
    <div className="team-info">
      <img
        id={utils.checkForId(props.team.name)}
        className="team-logo"
        src={props.team.logo}
      />
      <p className="team-name">{props.team.name}</p>
    </div>
  );
};

export default Team;
