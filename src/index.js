import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Navigatei } from "react-router-dom";
import Events from './Events';
import About from './About';
import Contact from './Contact';
import Main from './Main';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Setting paths for different routes 

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/' element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
