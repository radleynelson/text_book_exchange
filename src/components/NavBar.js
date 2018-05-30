import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
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
  handleAccountMenu() {
      alert('Log in / Create Account / Log out / My Account');
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
              <MaterialIcon icon="account_circle" size='medium' onClick={this.handleAccountMenu} />
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
            <BrowserRouter><Link to='/' onClick={this.handleClose}><MenuItem>
            Home
            </MenuItem></Link></BrowserRouter>
          </b>
          <Divider/>
          <BrowserRouter><Link to='/listings' onClick={this.handleClose}><MenuItem >Buy</MenuItem></Link></BrowserRouter>
          <BrowserRouter><Link to='/createListing' onClick={this.handleClose}><MenuItem >Sell</MenuItem></Link></BrowserRouter>
          <MenuItem onClick={this.handleClose}>Contact</MenuItem>
          <MenuItem onClick={this.handleClose}>My Account</MenuItem>
          <MenuItem onClick={this.handleClose}>My Favorites</MenuItem>
          <MenuItem onClick={this.handleClose}>How it Works</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default NavBar;
