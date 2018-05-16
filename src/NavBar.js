import React from 'react';
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
            <MenuItem
            onClick={this.handleClose}
            style = {{
              fontSize: '20px',
              textAlign: 'center',
            }}
            >
            Home
            </MenuItem>
          </b>
          <Divider/>
          <MenuItem onClick={this.handleClose}>Buy</MenuItem>
          <MenuItem onClick={this.handleClose}>Sell</MenuItem>
          <MenuItem onClick={this.handleClose}>Contact</MenuItem>
          <MenuItem onClick={this.handleClose}>My Acount</MenuItem>
          <MenuItem onClick={this.handleClose}>My Favorites</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default NavBar;
