import React from 'react';
import AppBar from 'material-ui/AppBar';

class NavBar extends React.Component{
  render(){
    return(
      <div>
      <AppBar
          title="Text Book Exchange"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </div>
    );
  }
}

export default NavBar;
