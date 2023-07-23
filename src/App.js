import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Scholarships } from "./components/Scholarships";
import { Divider, ThemeProvider } from '@mui/material';
import customTheme from './customTheme';

function App() {
  return (
      <ThemeProvider theme={customTheme}>
          <Header />
          <Divider />
          <Intro />
          <Scholarships />
      </ThemeProvider>
  );
}

export default App;
