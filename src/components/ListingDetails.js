import React from 'react';
import '../styles/ListingDetails.css';
import { Box } from 'react-bulma-components/full';
import { Button } from 'react-bulma-components/full';
import { Link } from 'react-router-dom';


class ListingDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Listing: {}
    }
  }
  componentDidMount(){
    this.setState(({
      Listing: {Title: 'Book 1', Author: 'Author 1', Id: 1, Price: '$20.00', Image: 'https://i.imgur.com/1w6UFY9.jpg', FullDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.', DatePosted: '1:09 PM - 1 Jan 2018'}

    }))
  }
  handleAddToCart(){
    alert('You will soon be able to add products to the cart');
  }
  render(){
    return(
      <div className='Product-Details'>
        {!!this.state.Listing.Title&&

          <div>
            <Box>
              <h1>{this.state.Listing.Title}</h1>
              <h3>by: {this.state.Listing.Author}</h3>
              <img src={this.state.Listing.Image} alt="textbook"/>
              <p className='description price'>{this.state.Listing.Price}</p>
              <Link to={'/cart/'+this.state.Listing.Id}><Button>Add to Cart</Button></Link>
              <p className='description'>{this.state.Listing.FullDescription}</p>
            </Box>
          </div>
        }
      </div>
    )
  }
}

export default ListingDetails;
