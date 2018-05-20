import React from 'react';

//  list of textbooks
// filters 
// search box?
//

class CreateListing extends React.Component {
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
                    <input placeholder="Title" type="text" name="Title" autoFocus='True'></input>
                    <input placeholder="Author" type="text" name="Author"></input>
                    <input placeholder="Description" type="text" name="Desc"></input>
                    <input placeholder="Price" type="text" name="Price"></input>
                    <select name="School">
                        <option value="BYU">Brigham Young University</option>
                        <option value="UVU">Utah Valley University</option>
                        <option value="USU">Utah State University</option>
                        <option value="UofU">University of Utah</option>
                    </select>
                    <button>Create a Listing</button>
                </form>
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

export default CreateListing;