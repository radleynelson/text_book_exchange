import React from 'react';
import { Field } from 'react-bulma-components/full';
import { Label } from 'react-bulma-components/full';
import { Control } from 'react-bulma-components/full';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectFieldExampleMultiSelect from './ComboBox.js';


//  list of textbooks
// filters 
// search box?
//

const Styles = {
            input: {
            marginBottom: '10px',
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
            //This will eventually return the database of listings
            <div>
                
                <form onSubmit={this.handleCreateListing}>
                    
                    
                    <div style={Styles.input}><TextField placeholder="Title" type="text" name="Title" autoFocus='True'/></div>
                    <div style={Styles.input}><TextField placeholder="Author" type="text" name="Author" /></div>
                    <div style={Styles.input}><TextField placeholder="Description" type="text" name="Desc" /></div>
                    <div style={Styles.input}><TextField placeholder="Price" type="text" name="Price" /></div>
                    <div style={Styles.input}><SelectFieldExampleMultiSelect /></div>
            {/*<select name="School">
                        <option value="BYU">Brigham Young University</option>
                        <option value="UVU">Utah Valley University</option>
                        <option value="USU">Utah State University</option>
                        <option value="UofU">University of Utah</option>
                    </select>*/}
            {/*<Link to={'/previewListing/1'}>*/}
                        <div style={Styles.input}><RaisedButton primary={true} label="Create Listing" onClick={this.handleCreateListing} /></div>
            {/*</Link>*/}
                </form>
                <br></br>
            
                
                <br></br>
            
                <ul>
                    <li>{this.state.listingDetails.Title}</li>
                    <li>{this.state.listingDetails.Author}</li>
                    <li>{this.state.listingDetails.Desc}</li>
                    <li>{this.state.listingDetails.Price}</li>
                    <li>{this.state.listingDetails.School}</li>
                </ul>
            </div>
        );
    };
}

export default CreateListingForm;