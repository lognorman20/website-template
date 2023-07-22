import { Intro } from "./components/views/Intro";
import { Divider } from '@mui/material';

function App() {
  return (
    <div style={{ maxWidth: '55%', margin: '0 auto', display: 'flex', flexWrap: 'wrap', flexDirection: 'column', justifyContent: 'center' }}>
      <Intro />
      <Divider />
      <Intro />
      <Divider />
      <Intro />
      <Divider />
      <Intro />
      <Divider />
      <Intro />
    </div>
  );
}

export default App;
