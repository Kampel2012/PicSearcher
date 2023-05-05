import React, { useContext } from 'react';
import './index.css';
import { ThemeContext } from '../../contexts/ThemeContext';

const SearchBar = ({ handlerSubmit, handlerInput }) => {
  const btnText = 'Search';
  const theme = useContext(ThemeContext);
  return (
    <div className={`Search-bar Search-bar_theme_${theme}`}>
      <form className="Search-bar__container" onSubmit={handlerSubmit}>
        <input
          onChange={handlerInput}
          className={`Search-bar__input Search-bar__input_theme_${theme}`}
          type="search"
          name="search"
          id="search"
          autoComplete="off"
          placeholder="🔍 For example: cats"
        />
        <button
          className={`Search-bar__button Search-bar__button_theme_${theme}`}
          type="submit"
        >
          {btnText}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
