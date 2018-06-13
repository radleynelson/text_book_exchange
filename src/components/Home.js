import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import LandingText from './LandingText';
import Toggle from './Toggle';
import { Button, Columns } from 'react-bulma-components/full';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


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
    button2: {
        position: 'absolute',
        right: '10px',
        top: '5px',
        color: '#EE6C62',
    },
    root: {
        display: 'grid',
        gridTemplate: '10px 10px',
        gridColumnGap: '2em',
        position: 'relative',
        
    },
    Text: {
        margin: 'auto',
        fontSize: '5em',
    },
    searchInput: {
        width: '100%',
        padding: '12px 20px',
        margin: '8px 0',
        boxSizing: 'border-box',
        outlineStyle: 'none',
    }
};

class Home extends React.Component {
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
        <Columns>
            <Columns.Column>
                <section style={Styles.root}>
                    <BrowserRouter><Link to='/createListing' onClick={this.handleClose}><Button style={Styles.button2}>Sell + </Button></Link></BrowserRouter>
                    
                    
                    {/*<Link to='/listings'><button style={Styles.button}><span style={Styles.Text}>BUY</span></button></Link>
                    
                    <Link to='/createListing'><button style={Styles.button}><span style={Styles.Text}>SELL</span></button></Link>
                    <Toggle />*/}
                </section>
                <section>
                    
                </section>
            </Columns.Column>
         
        </Columns>
        <Columns>
            <Columns.Column>
                <form>
                        <FormGroup controlId="formBasicText">
                            <FormControl type="text" placeholder="Search" style={Styles.searchInput}/>
                            <FormControl.Feedback />
                        </FormGroup>
                    </form>
            </Columns.Column>
        </Columns>
        <hr></hr>
           <LandingText/>
        </div>
        
  );
  }
}
export default Home;
