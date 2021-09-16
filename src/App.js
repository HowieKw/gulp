import './App.css';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalstyling';
import { lightTheme, darkTheme } from './theme';
import Gulp from './components/Gulp';

function App() {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div>
          <Gulp themeToggler={themeToggler} theme={theme}/>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;

