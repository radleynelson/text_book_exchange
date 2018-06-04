import React from 'react';
import { Columns, Box, Media } from 'react-bulma-components/full';
import { FormGroup, ControlLabel, FormControl, HelpBlock, DropdownButton } from 'react-bootstrap';



export default class PaymentForm extends React.Component {
    constructor(props){
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
        
        this.state = {
            value: '',
        };
        
    }
    
    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }
    
    handleChange(e) {
        this.setState({value: e.target.value});
    }
    
    render() {
        return(
                <div>
                    
                    <Box>
                <Media renderAs="nav">
                    
                    <Columns>
                        <Columns.Column size={6}>
                            <form>
                                <ControlLabel>Card Number</ControlLabel>
                                <FormGroup controlId='formBasicText' validationState={this.getValidationState()}>
                                    <FormControl type="text" value={this.state.value} placeholder="Enter Card Number" onChange={this.handlChange} />
                                    <FormControl.Feedback />
                                    <HelpBlock></HelpBlock>
                                </FormGroup>
                            </form>
                        </Columns.Column>
                        <Columns.Column size={3}>
                           
                        </Columns.Column>
                        <Columns.Column size={3}>
                           
                        </Columns.Column>
                    </Columns>
                
                </Media>
            </Box>
        </div>
                
            
);

};
}