import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route ,Link } from 'react-router-dom';
import CalculatorComponent from './components/CalculatorComponent/CalculatorComponent';
import Home from './components/Home/Home';
import RickAndMorty from './components/RickAndMorty/RickAndMorty';

function App() {
  return (
    <Router>

      <div className="App">
   
      <ul> 
        <li>
          <Link to = "/"> Home </Link>
        </li>
        <li>
          <Link to = "/calci"> calci </Link>
        </li>
        <li>
          <Link to = "/RickAndMorty"> Rick And Morty </Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />}>
          {" "}
          </Route>
          <Route exact path="/calci" element={<CalculatorComponent />}>
            {" "}
        </Route>
        <Route exact path="/RickAndMorty" element={<RickAndMorty />}>
        {""}
        </Route>
      </Routes>
      </div>
    </Router> 
  );
}

export default App;
