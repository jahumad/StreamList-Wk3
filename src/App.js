import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StreamList from './components/StreamList';
import Movies from './components/Movies';
import Cart from './components/Cart';
import About from './components/About';
import Watch from './components/Watch';
import './App.css';

function App () {
    return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <ul className="nav-list">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/watch">Watch List</Link></li>
            <li><Link to="/about">About</Link></li>
            
          </ul>
        </nav>
        <main className="content">
          <Routes>
            <Route path="/home" element={<StreamList />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/watch" element={<Watch />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
