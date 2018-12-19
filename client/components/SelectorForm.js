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
    this.props.getGames(this.state.selectedSeason, this.state.selectedMatchday);
  }

  render() {
    const isButtonDisabled =
      this.state.selectedMatchday === '' || this.state.selectedSeason === '';
    return (
      <div id="selectors">
        <div>
          <>
            Season
            <select onChange={this.handleChange} name="selectedSeason">
              <option value="">--</option>
              <option value="2017">2017-18</option>
              <option value="2018">2018-19</option>
            </select>
          </>
        </div>
        <div>
          <>
            Matchday
            <select onChange={this.handleChange} name="selectedMatchday">
              <option value="">--</option>
              {Array(34)
                .fill('')
                .map((el, index) => {
                  return (
                    <option value={index + 1} key={`matchday-${index + 1}`}>
                      {index + 1}
                    </option>
                  );
                })}
            </select>
          </>
        </div>
        <button
          disabled={isButtonDisabled}
          id={isButtonDisabled ? 'disabled-button' : undefined}
          type="button"
          onClick={this.handleClick}
        />
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
