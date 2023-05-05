import React, { useContext } from 'react';
import './theme.css';
import { ThemeContext } from '../../contexts/ThemeContext';

const Theme = ({ onSwitchTheme }) => {
  const theme = useContext(ThemeContext);
  const setOfThemes = {
    light: '☀️',
    dark: '🌙',
  };

  function switchTheme() {
    if (theme === 'light') onSwitchTheme('dark');
    else onSwitchTheme('light');
  }

  return (
    <div className="Theme">
      <button className="Theme__button" onClick={switchTheme} type="button">
        {setOfThemes[theme]}
      </button>
    </div>
  );
};

export default Theme;
