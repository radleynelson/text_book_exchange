import React, {Component} from 'react';
import { Heading, Hero, Container, Button, Columns, Section, Box, Level, Media } from 'react-bulma-components/full';
import { Link } from 'react-router-dom';

const Styles = {
    image: {
        height: '64',
        width: '64',
        background: '#e6e6e6',
        
    },
    link: {
        position: 'absolute',
        bottom: '0',
    }
    
}

export default class CartProduct extends Component {
    render() {
        return(
            <Section>
            <Box>
                <Media renderAs="nav">
                    
                    <Columns>
                        <Columns.Column size={6}>
                            <Link to={'/listing/'+this.props.Id}><p>{this.props.Title}</p></Link>
                            <p>{this.props.Author}</p>
                            <p>{this.props.ISBN}</p>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <Container>
                                <span style={Styles.link}><a onClick={this.handleDelete}>Delete</a>
                                       
                                <a onClick={this.saveForLater}>Save for Later</a></span>
                            </Container>
                        </Columns.Column>
                        <Columns.Column size={3}>
                            <p>{this.props.Price}</p>
                        </Columns.Column>
                        <Columns.Column size={3}>
                            <Media.Item renderAs="figure" position="right"><img style={Styles.image} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png"/></Media.Item>
                        </Columns.Column>
                    </Columns>
                
                </Media>
            </Box>
        </Section>
                      
        );
    }
    
          
}