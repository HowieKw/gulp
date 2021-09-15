import './App.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalstyling';
import { theme } from './theme';
import Gulp from './components/Gulp';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <Gulp />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;

