import React from 'react';
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import Columns from 'react-bulma-components/lib/components/columns';
import LandingText from './LandingText';
import Toggle from './Toggle';


const Styles = {
    button: {
        height: '25em',
        width: '80%',
        margin: 'auto',
        marginTop: '5em',
        backgroundColor: 'rgb(0, 188, 212)',
        borderRadius: '1em',
        outline: 'none',


    },
    root: {
        display: 'grid',
        gridTemplate: 'auto auto/ auto auto',
        gridColumnGap: '2em',
    },
    Text: {
        margin: 'auto',
        fontSize: '5em',
    }
};

class Home extends React.Component {

  render(){
    return(
        <Columns>
            <Columns.Column>
                <section style={Styles.root}>
                   <Link to='/listings'><button style={Styles.button}><span style={Styles.Text}>BUY</span></button></Link>
                    <Link to='/createListing'><button style={Styles.button}><span style={Styles.Text}>SELL</span></button></Link>
                    <Toggle />
                </section>
                <LandingText/>
            </Columns.Column>

        </Columns>

  );
  }
}
export default Home;
