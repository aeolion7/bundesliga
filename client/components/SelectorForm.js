import React from 'react';

const SelectorForm = () => {
  return (
    <div id="selectors">
      <div>
        <>
          Season
          <select>
            <option>2018-19</option>
          </select>
        </>
      </div>
      <div>
        <>
          Matchday
          <select>
            <option>13</option>
          </select>
        </>
      </div>
      <button type="submit" />
    </div>
  );
};

export default SelectorForm;
