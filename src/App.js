import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './Home.js';
import NavBar from './NavBar.js';
import Footer from './Footer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <NavBar/>
          <Home/>
          <Footer/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
