import React from 'react';
import Product from './Product.js';
import SearchBox from './SearchBox.js';
import axios from 'axios';
import '../styles/listings.css';
import { Columns } from 'react-bulma-components/full';

const Styles = {
    searchBox: {
        marginBottom: '3em',
        width: '100%',
        
    },
    filterComponents: {
        marginLeft: '1.5em',
    },
    searchInput: {
        width: '80%',
        padding: '12px 20px',
        margin: '0 auto',
        boxSizing: 'border-box',
        outlineStyle: 'none',
        display: 'block',
    },
}
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
        <Columns>
            <div style={Styles.searchBox}>
                <SearchBox />
            </div>
        </Columns>
        <Columns>
        <Columns.Column size="one-fifth">
                <p>Narrow your search</p>
                <br></br>
                <div>Price Filter
                    <div style={Styles.filterComponents}>
                        <p><label>From: </label><input type='textbox' placeholder='$'></input></p>
                    
                        <p><label> To: </label><input type='textbox' placeholder='$'></input></p>
                    </div>
                </div>
                <br></br>
                <div>Condition Filter
                    <div style={Styles.filterComponents}>
                        <p><input type='checkbox' value='Good'></input><label> Good</label></p>
                        <p><input type='checkbox' value='Used'></input><label> Used</label></p>
                        <p><input type='checkbox' value='Bad'></input><label> Bad</label></p>
                    </div>
                </div>
                <br></br>
                <div>School Filter
                    <select style={Styles.filterComponents}>
                        <option value='Brigham Young University'>Brigham Young University</option>
                    </select>
                </div>
                <br></br>
                <div>Department Filter
                    <select style={Styles.filterComponents}>
                        <option value='Chemistry'>Chemistry</option>
                    </select>
                </div>
                
        </Columns.Column>
         <Columns.Column>
            
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
        </Columns.Column>
        </Columns>
      </section>

    )
  }
}

export default Listings
