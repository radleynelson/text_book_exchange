import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import '../App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './Home.js';
import NaviBar from './NavBar.js';
import Footer from './Footer.js';
import CreateListing from './CreateListing.js';
import Listings from './Listings.js';
import ListingDetails from './ListingDetails.js';
import PreviewListing from './PreviewListing.js';
import Cart from './Cart.js';
import ReviewOrder from './ReviewOrder.js';
import RaisedButton from 'material-ui/RaisedButton';
import MyAccount from './MyAccount.js';



const NotFoundPage = () => (
    <div>
        <h1>404</h1>
        <h3>Page not found</h3>
        <hr></hr>
        <br></br>
        <Link to="/"><RaisedButton label="Go to Home" primary={true} /></Link>
    </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
        <NaviBar/>
        <BrowserRouter>
        <div className="AppContainer">
        <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/createListing" component={CreateListing} />
            <Route path="/listings" component={Listings} />
            <Route path="/listing/:id" component={ListingDetails} exact={true} />
            <Route path="/previewListing/:id" component={PreviewListing} exact={true} />
            <Route path="/cart/:id" component={Cart} exact={true} />
            <Route path="/reviewOrder" component={ReviewOrder} />
            <Route path="/myAccount" component={MyAccount} />
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
