import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';

class Home extends React.Component {

  render(){
    return(
      <section style={{padding: '50px',display: 'grid', gridTemplate: 'auto auto/ auto auto'}}>
        <div style={{backgroundColor: 'black', width: '400px', height: '400px', margin: 'auto'}}>
        </div>
        <div style={{backgroundColor: 'black', width: '400px', height: '400px', margin: 'auto'}}>
        </div>
      </section>
  );
  }
}
export default Home;
