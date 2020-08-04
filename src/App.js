import React from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import styled from 'styled-components'
import Homepage from './Homepage.js';
import Curlstyle from './Curlstyle.js';
import Blog from './Blog.js';
import Products from './Products.js';


function App() {
  return (
    <div>
      <header>
        <h1>Destination Curl</h1>
        <h3> Curl Bar >>></h3>
      <nav>
          <Link to="/">Homepage</Link>
          <Link to="/curlstyle-ideas">DIY Curlstyle Ideas</Link>
          <Link to="/curl-blog">Curl Blog</Link>
      </nav>
      <Route path="/" exact>
        <Homepage />
      </Route>
      {/* <Route path="/curlstyle-ideas">
        <Curlstyle />
      </Route> */}
      <Route path="/:products">
        <Products />
      </Route>
      
      </header>
    </div>
  );
}

export default App;
