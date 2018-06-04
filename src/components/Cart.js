import React, {Component} from 'react';
import { Heading, Hero, Container, Button, Section, } from 'react-bulma-components/full';
import CartProduct from './CartProduct.js';
import { Link } from 'react-router-dom';
 


export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Listing: {},
        }
        
    }
    
    componentDidMount(){
    this.setState(({
      Listing: {Title: 'Biology and Anthropology', Author: 'Author 1', Id: 1, Price: '$20.00', Image: 'https://i.imgur.com/1w6UFY9.jpg', FullDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.', DatePosted: '1:09 PM - 1 Jan 2018'}

    }))
    }
    
    handleDelete() {
        alert('Functionality for deleting a cart item is coming soon!')
    }
    
    render() {
        return (
        <div>
            <Section>
            <Hero color="info" gradient>
                <Hero.Body>
                    <Container>
                        <Heading>
                            Shopping Cart
                        </Heading>
                        <Heading subtitle size={3}>
                            View items in your shopping cart
                        </Heading>
                    </Container>
                </Hero.Body>
            </Hero>
            </Section>
            
            <CartProduct Title={this.state.Listing.Title} Author={this.state.Listing.Author} ISBN={this.state.Listing.ISBN} Price={this.state.Listing.Price} />

            <Section>
            <Container>
                <div>
                    <Link to='/reviewOrder'><Button color="primary">Proceed to Checkout</Button></Link>
                </div>
            </Container>
            </Section>
        </div>


        );
    }
}
