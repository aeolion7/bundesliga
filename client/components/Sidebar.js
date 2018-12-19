import React, { Component } from 'react';
import Table from './Table';
import SelectorForm from './SelectorForm';
import { getTableFromAPI } from '../reducer';
import { connect } from 'react-redux';

class Sidebar extends Component {
  componentDidMount() {
    this.props.getTable();
  }

  render() {
    return (
      <div id="sidebar">
        <img id="bundesliga-logo" src="logos/bundesliga.png" />
        <SelectorForm />
        {this.props.table[17] ? (
          <Table />
        ) : (
          <table id="table-loading">
            <tbody>
              <tr>
                <td>Loading table...</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ table: state.table });

const mapDispatchToProps = dispatch => ({
  getTable: () => {
    dispatch(getTableFromAPI());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
