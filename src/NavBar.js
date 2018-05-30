import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import MaterialIcon, {colorPallet} from 'material-icons-react';
import TextField from 'material-ui/TextField';



class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.handleOpenNavBar = this.handleOpenNavBar.bind(this);
    this.state = {
      open: false,
    }
  }
  handleOpenNavBar(){
    this.setState(()=> ({open: !this.state.open}))
    console.log(this.state.isNavOpen);
  }
  handleClose(){
    this.setState(()=>({open: false}));
  }

  render(){
    return(
      <div>

      <AppBar
          title={<div>Text Book Exchange</div>}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick = {this.handleOpenNavBar}
          iconElementRight = {
            <div>
            <TextField
            hintText="Search"
            />
              <MaterialIcon icon="account_circle" size='medium' />
            </div>
          }
        />
        <Drawer
          docked={false}
          width={400}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <b>
          <BrowserRouter>
            <Link to="/" onClick={this.handleClose}>
              <MenuItem
              style = {{
                fontSize: '20px',
                textAlign: 'center',
              }}
              >
              Home
              </MenuItem>
            </Link>
          </BrowserRouter>
          </b>
          <Divider/>
          <BrowserRouter><Link onClick={this.handleClose} to="/listings" exact={true}><MenuItem>Buy</MenuItem></Link></BrowserRouter>
          <BrowserRouter><Link onClick={this.handleClose} to="/createListing" exact={true}><MenuItem>Sell</MenuItem></Link></BrowserRouter>
          <MenuItem onClick={this.handleClose}>Contact</MenuItem>
          <MenuItem onClick={this.handleClose}>My Acount</MenuItem>
          <MenuItem onClick={this.handleClose}>My Favorites</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default NavBar;
