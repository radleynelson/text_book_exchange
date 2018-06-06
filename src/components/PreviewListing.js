import React from 'react';
import '../styles/ListingDetails.css';
import { Box } from 'react-bulma-components/full';
import Product from './Product.js';
import RaisedButton from 'material-ui/RaisedButton';

const Styles =  {
    button: {
      margin: '10px', 
    },
};

class PreviewListing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Listing: {}
    }
  }
    handleConfirm() {
        alert('This will soon take you to your My Listings page')
    }
    handleEdit() {
        alert('Edit page is under construction!')
    }
  componentDidMount(){
    this.setState(({
      Listing: {Title: 'Book 1', Author: 'Author 1', Id: 1, Price: '$20.00', Image: 'https://i.imgur.com/1w6UFY9.jpg', FullDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.', DatePosted: '1:09 PM - 1 Jan 2018'}

    }))
  }
    
  render(){
    return(
    <div>
        <h1>How does it look?</h1>
        <h4>Here is a preview of what your textbook listing will look like to buyers.</h4>
        <br></br>
        <div style={Styles.button}><span style={Styles.button}><RaisedButton label="Edit" onClick={this.handleEdit} styles={Styles.button} /></span>
        <span style={Styles.button}><RaisedButton primary={true} label='Confirm' onClick={this.handleConfirm} styles={Styles.button} /></span></div>
        <br></br>
        
      <div className='Product-Details'>
        {
          <div>
            <Box>
             <Product
                Image={this.state.Listing.Image}
                Title={this.state.Listing.Title}
                Author={this.state.Listing.Author}
                Id={this.state.Listing.Id}
                Price={this.state.Listing.Price}
                ShortDescription= {this.state.Listing.ShortDescription}
                DatePosted= {this.state.Listing.DatePosted}
                />
            </Box>
          </div>
        }
      </div>
    </div>
    )
  }
}

export default PreviewListing;