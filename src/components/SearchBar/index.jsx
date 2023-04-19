import React from 'react';
import './index.css';

const SearchBar = ({ hendlerSubmit, hendlerInput }) => {
  const btnText = 'Search';
  return (
    <div className="Search-bar">
      <div className="Search-bar__container">
        <input
          onChange={hendlerInput}
          className="Search-bar__input"
          type="search"
          name="search"
          id="search"
          placeholder="For example: dogs"
        />
        <button
          onClick={hendlerSubmit}
          className="Search-bar__button"
          type="button"
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
