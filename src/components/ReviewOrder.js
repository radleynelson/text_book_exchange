import React from 'react';
import CartProduct from './CartProduct.js';
import PaymentForm from './PaymentForm.js';
import { Heading, Hero, Container } from 'react-bulma-components/full';


export default class ReviewOrder extends React.Component {
    render() {
        return(
            <div>
                <Hero color="info" gradient>
                <Hero.Body>
                    <Container>
                        <Heading>
                            Review Order
                        </Heading>
                        <Heading subtitle size={3}>
                            Edit your payment information.
                        </Heading>
                    </Container>
                </Hero.Body>
            </Hero>
                <CartProduct />
                <PaymentForm />
                
                
            </div>
);

};
}