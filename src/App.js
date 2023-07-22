import { Intro } from "./components/Intro";
import { Divider, ThemeProvider } from '@mui/material';
import customTheme from './customTheme';

function App() {
  return (
      <ThemeProvider theme={customTheme}>
          <Intro />
          <Divider sx={{ my: 2}} />
      </ThemeProvider>
  );
}

export default App;
