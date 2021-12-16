import logo from './logo.svg';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { Dropdown } from 'react-bootstrap';
import NavBar from './components/NavBar';
import About from './page/about'

import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';



function App() {
  return (
    <Router>
    <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" elements={''} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        </div>
      <div>
      <h1>ciao io sono home page</h1>
      </div>
    </Router>
  );
}

export default App;
