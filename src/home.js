import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';

const Styles = {
    button: {
        height: '25em',
//        width: '25%',
        margin: '2em',
        
    },
    root: {
        display: 'grid',
        gridTemplate: 'auto auto/ auto auto',
        gridColumnGap: '2em',
}
};

class Home extends React.Component {
    
  render(){
    return(
        
        <section style={Styles.root}>
            <RaisedButton label="Full width" secondary={true} style={Styles.button} fullWidth={true} />
        <RaisedButton label="Full width" secondary={true} style={Styles.button} fullWidth={true} />
        </section>
        
        
  );
  }
}
export default Home;
