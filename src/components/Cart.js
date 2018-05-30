import React, {Component} from 'react';
import { Heading, Hero, Container, Button } from 'react-bulma-components/full';

export default class Cart extends Component {
    render() {
        return (
        <div>
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
            <div>
                <Button color="primary">Proceed to Checkout</Button>
            </div>
        </div>


        );
    }
}
