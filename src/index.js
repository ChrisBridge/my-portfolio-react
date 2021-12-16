import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import About from './page/about';
import App from './App';



ReactDOM.render(
  <Router>
    <NavBar />
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
  </Router>,
  
  document.getElementById('root')
);

