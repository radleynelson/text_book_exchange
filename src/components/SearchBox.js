import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const Styles = {    
    searchInput: {
        width: '80%',
        padding: '12px 20px',
        margin: '0 auto',
        boxSizing: 'border-box',
        outlineStyle: 'none',
        display: 'block',
    }
};

export default class SearchBox extends React.Component {
    render() {
        return(
            
                <form>
                    <FormGroup controlId="formBasicText">
                        <FormControl type="text" placeholder="Search" style={Styles.searchInput}/>
                        <FormControl.Feedback />
                    </FormGroup>
                </form>
             
        );
    };
}


