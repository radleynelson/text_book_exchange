import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';

class Home extends React.Component {

  render(){
    return(
      <section style={{display: 'grid'}}>
        <div style={{backgroundColor: 'black', width: '400px', height: '400px'}}>
        </div>
        <div style={{backgroundColor: 'black', width: '400px', height: '400px'}}>
        </div>
      </section>
  );
  }
}
export default Home;
