import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './Home.js';
import NavBar from './NavBar.js';
import Toggle from './Toggle.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <NavBar/>
          <Home />
          <Toggle />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
