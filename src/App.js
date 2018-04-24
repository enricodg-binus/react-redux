import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './components/home.js';
import About from './components/about.js';

import {
    Link,
    Route,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
        </div>
      </div>
    );
  }
}

export default App;
