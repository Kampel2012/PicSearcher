import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { ThemeContext } from './contexts/ThemeContext';
import Main from './pages/Main.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage404 from './pages/ErrorPage404/ErrorPage404';
import PhotoPage from './pages/PhotoPage/PhotoPage';

function App() {
  const [theme, setTheme] = useState('light');

  function switchTheme(value) {
    setTheme(value);
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`App App_theme_${theme}`}>
        <div className="App__container">
          <Header onSwitchTheme={switchTheme} />
          <BrowserRouter>
            <Routes>
              <Route index path="/" element={<Main />} />
              <Route index path="/photos/:id" element={<PhotoPage />} />
              <Route path="*" element={<ErrorPage404 />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
