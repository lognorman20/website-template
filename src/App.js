import { Intro } from "./components/views/Intro";
import { Divider, ThemeProvider } from '@mui/material';
import customTheme from './customTheme';

function App() {
  return (
      <ThemeProvider theme={customTheme}>
        <>
          <Intro />
          <Divider />
        </>
      </ThemeProvider>
  );
}

export default App;
