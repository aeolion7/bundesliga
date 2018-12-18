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
    this.props.test();
  }

  render() {
    return (
      <div id="selectors">
        <div>
          <>
            Season
            <select onChange={this.handleChange} name="selectedSeason">
              <option value="2017">2017-18</option>
              <option value="2018">2018-19</option>
            </select>
          </>
        </div>
        <div>
          <>
            Matchday
            <select onChange={this.handleChange} name="selectedMatchday">
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
  test: () => {
    dispatch(getGamesFromAPI());
  },
});

export default connect(null, mapDispatchToProps)(SelectorForm);
