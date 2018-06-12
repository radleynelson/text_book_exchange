import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Navbar } from 'react-bulma-components/full';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import MaterialIcon from 'material-icons-react';
import TextField from 'material-ui/TextField';


class NaviBar extends React.Component{
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


            <Navbar>
            <Navbar.Brand>
            <Navbar.Item href="#">
            TextBook Exchange
            </Navbar.Item>
            <Navbar.Burger/>
            </Navbar.Brand>
            <Navbar.Menu>
            <Navbar.Container>
            <Navbar.Item dropdown hoverable>
            <Navbar.Link>
            
            </Navbar.Link>
            <Navbar.Dropdown boxed>
            <Navbar.Item href="#">
                Buy
            </Navbar.Item>
            <Navbar.Item href="#">
                Sell
            </Navbar.Item>
            <Navbar.Item href="#">
                Contact
            </Navbar.Item>
            <Navbar.Item href="#">
                My Account
            </Navbar.Item>
            <Navbar.Item href="#">
                My Favorites
            </Navbar.Item>
            <Navbar.Item href="#">
                How It Works
            </Navbar.Item>
            <Navbar.Divider/>
            <Navbar.Item active href="#">
                Home
            </Navbar.Item>
            </Navbar.Dropdown>
            </Navbar.Item>
            
            </Navbar.Container>
            <Navbar.Container position="end">
            <Navbar.Item dropdown hoverable>
            <Navbar.Link>
            Account
            </Navbar.Link>
            <Navbar.Dropdown right boxed>
            <Navbar.Item href="#">
                Sign Up
            </Navbar.Item>
            <Navbar.Item href="#">
                Log In
            </Navbar.Item>
            <Navbar.Item href="#">
                Log Out
            </Navbar.Item>
            
            </Navbar.Dropdown>
            </Navbar.Item>
            </Navbar.Container>
            </Navbar.Menu>
            </Navbar>

            {/*<AppBar
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
        </Drawer>*/}
            </div>
        );
    }
}

export default NaviBar;
