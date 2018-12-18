import React, { Component } from 'react';

export default class SelectorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMatchday: '',
      selectedSeason: '',
    };
  }

  render() {
    return (
      <div id="selectors">
        <div>
          <>
            Season
            <select>
              <option value="2017">2017-18</option>
              <option value="2018">2018-19</option>
            </select>
          </>
        </div>
        <div>
          <>
            Matchday
            <select>
              <option value="13">13</option>
            </select>
          </>
        </div>
        <button type="submit" />
      </div>
    );
  }
}
