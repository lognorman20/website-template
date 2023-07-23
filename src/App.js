import { Header } from "./components/Header";
import { Intro } from "./components/sections/Intro";
import { Scholarships } from "./components/sections/Scholarships";
import { Divider, ThemeProvider } from '@mui/material';
import customTheme from './customTheme';
import TableOfContentsButton from './components/TableOfContentsButton/TableOfContentsButton';

function App() {
  return (
      <ThemeProvider theme={customTheme}>
          {/* top of page */}
          <Header />
          <Divider />

          {/* actually sections within the page */}
          <Intro />
          <Divider />

          <Scholarships />
          <Divider />

          {/* button to quickly jump around the page */}
          <TableOfContentsButton />

          {/* footer of the page */}
          <Divider />
      </ThemeProvider>
  );
}

export default App;
