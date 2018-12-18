import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGamesFromAPI } from '../reducer';

class SelectorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMatchday: '',
      selectedSeason: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleClick() {
    const seasonId = this.state.selectedSeason;
    const matchdayId = this.state.selectedMatchday;
    this.props.getGames(seasonId, matchdayId);
  }

  render() {
    return (
      <div id="selectors">
        <div>
          <>
            Season
            <select onChange={this.handleChange} name="selectedSeason">
              <option>--</option>
              <option value="2013">2013-14</option>
              <option value="2014">2014-15</option>
              <option value="2015">2015-16</option>
              <option value="2016">2016-17</option>
              <option value="2017">2017-18</option>
              <option value="2018">2018-19</option>
            </select>
          </>
        </div>
        <div>
          <>
            Matchday
            <select onChange={this.handleChange} name="selectedMatchday">
              <option>--</option>
              <option value="12">12</option>
              <option value="13">13</option>
            </select>
          </>
        </div>
        <button type="button" onClick={this.handleClick} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getGames: (seasonId, matchdayId) => {
    dispatch(getGamesFromAPI(seasonId, matchdayId));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(SelectorForm);
