import './App.css';
import Navbar from './TopNav';
import Premade from './Premade';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Premade />
      HelloTesting
      <Button>Test</Button>
    </div>
  );
}

export default App;
