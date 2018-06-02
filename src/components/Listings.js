import React from 'react';
import Product from './Product.js';
import SearchBar from './SearchBar.js';
import axios from 'axios';
import '../styles/listings.css';

class Listings extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listings: [],
    }
  }
  componentDidMount(){
    axios.get('/api/testing').then((res)=>{
      this.setState(({
          listings: res.data
        }));
    })
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
