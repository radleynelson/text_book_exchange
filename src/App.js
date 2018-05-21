import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './Home.js';
import NavBar from './NavBar.js';
import Toggle from './Toggle.js';
import Footer from './Footer.js';
import CreateListing from './CreateListing.js';

const NotFoundPage = () => (
    <div>
        404 - <Link to="/">Go to Home</Link>
    </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
        <NavBar/>
        <BrowserRouter>
        <div className="AppContainer">
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/create" component={CreateListing} />
          <Route component={NotFoundPage} />
        </Switch>
        </div>
        </BrowserRouter>
          <Footer/>
        </MuiThemeProvider>
      </div>
    );
  }
};

export default App;
