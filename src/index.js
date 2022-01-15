import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import './styles/variables.scss'
import  'bootstrap/dist/css/bootstrap.min.css' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import About from './layout/about'
import App from './App'
import Work from './layout/work'
import Contact from './layout/contact'
import Footer from './components/Footer/footer'


ReactDOM.render(
  <Router>
    <NavBar />
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/work" element={<Work />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
    <Footer />
  </Router>,
  
  document.getElementById('root')
);

