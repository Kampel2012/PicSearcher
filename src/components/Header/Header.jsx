import React from 'react';
import Theme from '../Theme/Theme';
import './Header.css';

const Header = ({ onSwitchTheme }) => {
  return (
    <header className="App-header">
      <h1 className="App-header__title">PicSearch</h1>
      <Theme onSwitchTheme={onSwitchTheme} />
    </header>
  );
};

export default Header;
