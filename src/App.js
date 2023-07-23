import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Divider, ThemeProvider } from '@mui/material';
import customTheme from './customTheme';

function App() {
  return (
      <ThemeProvider theme={customTheme}>
          <Header />
          <Divider />
          <Intro />
      </ThemeProvider>
  );
}

export default App;
