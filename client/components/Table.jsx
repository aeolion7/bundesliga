import React, { Component } from 'react';
import TableRow from './TableRow.jsx';
import { connect } from 'react-redux';
import utils from '../../server/utils';

class Table extends Component {
  render() {
    return (
      <table>
        <tbody>
          {this.props.table.map(teamObj => {
            const teamName = utils.shortenName(teamObj.team.name);
            return (
              <TableRow
                key={teamObj.position}
                team={utils.generateTableName(teamName)}
                position={teamObj.position}
                points={teamObj.points}
                logo={'logos/' + utils.generateLogo(teamName)}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  table: state.table,
});

export default connect(mapStateToProps)(Table);
