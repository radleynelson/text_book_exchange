import React from 'react';
import Product from './Product.js';
import SearchBar from './SearchBar.js';
import '../styles/listings.css';

class Listings extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listings: [],
    }
  }
  componentDidMount(){
    this.setState(({
        listings: [
          {Title: 'Book 1', Author: 'Author 1', Id: 1, Price: '$20.00', Image: 'https://i.imgur.com/1w6UFY9.jpg', ShortDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.', DatePosted: '1:09 PM - 1 Jan 2018'},
          {Title: 'Book 2', Author: 'Author 2', Id: 2, Price: '$20.00', Image: 'https://i.imgur.com/1w6UFY9.jpg', ShortDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.', DatePosted: '12:14 PM - 5 Feb 2018'},
          {Title: 'Book 3', Author: 'Author 3', Id: 3, Price: '$20.00', Image: 'https://i.imgur.com/1w6UFY9.jpg', ShortDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.', DatePosted: '4:19 AM - 1 Jan 2018'},
          {Title: 'Book 4', Author: 'Author 4', Id: 4, Price: '$20.00', Image: 'https://i.imgur.com/1w6UFY9.jpg', ShortDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.', DatePosted: '3:37 PM - 1 Jan 2018'},
          {Title: 'Book 5', Author: 'Author 5', Id: 5, Price: '$20.00', Image: 'https://i.imgur.com/1w6UFY9.jpg', ShortDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.', DatePosted: '7:53 AM - 1 Jan 2018'},
        ]
      }));
  }
  render(){
    return (
      <section>
        <SearchBar />
        <div className='listing-Parent'>

          {
            this.state.listings.map((listing, index) => (
              <div key={index} className='listing'>
                <Product
                Image={listing.Image}
                Title={listing.Title}
                Author={listing.Author}
                Id={listing.Id}
                Price={listing.Price}
                ShortDescription= {listing.ShortDescription}
                DatePosted= {listing.DatePosted}
                />
              </div>
            ))
          }
        </div>
      </section>

    )
  }
}

export default Listings
