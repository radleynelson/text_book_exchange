import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectFieldExampleMultiSelect from './ComboBox.js';
import  { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';


//  list of textbooks
// filters 
// search box?
//

const Styles = {
            input: {
                padding: '8px',
                marginBottom: '4em',
                width: '75%',
                transition: 'width 0.4s ease-in-out',
                outline: 'none',
                border: 'none',
                borderBottom: '1px solid',
                display: 'block',
                
        },
    };

class CreateListingForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleCreateListing = this.handleCreateListing.bind(this);
        this.state = {
            listingDetails: {
                Title: 'No Title',
                Author: 'No Author',
                Desc: 'No Description',
                Price: 'No Price',
                School: 'No School',

                }
        }
    }
    handleCreateListing(e) {
        e.preventDefault();
        
        const Title = e.target.elements.Title.value.trim();
        const Author = e.target.elements.Author.value.trim();
        const Desc = e.target.elements.Desc.value.trim();
        const Price = e.target.elements.Price.value.trim();
        const School = e.target.elements.School.value.trim();
        
        
        
        this.setState(() => {
            return {
                listingDetails: {
                    Title: Title,
                    Author: Author,
                    Desc: Desc,
                    Price: Price,
                    School: School,
                }
            };
        });
        
    };
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleCreateListing}>
                    <label>Title</label>
                    <input style={Styles.input} type='text'></input>
                    <label>Author</label>
                    <input style={Styles.input} type='text'></input>
                    <label>Description</label>   
                    <input style={Styles.input} type='text'></input>
                    <label>Price</label>
                    <input style={Styles.input} type='text'></input>
                    <label>School</label>
                    <input style={Styles.input} type='text'></input>
                    
                </form>
            </div>
        );
    };
}

export default CreateListingForm;