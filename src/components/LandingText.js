import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Container, Section, Heading } from 'react-bulma-components';

 const JumboStyle = {
	 Jumbo: {
	 	position: 'relative',
        margin: 'auto',
        backgroundColor: 'rgb(0, 188, 212)',
        width: 'auto',
        borderStyle: 'solid',
        boxShadow: '5px 5px grey'
    }
}

class LandingText extends React.Component {
	render() {
		return(
			<div>
				<Jumbotron style={JumboStyle.Jumbo}> 
					<h1>"Created For Students, by Students"</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
					<Button bsStyle="primary">
					Button
					</Button>
				</Jumbotron>
			</div>
		);
	}
}

/*const JumboStyle = {
	 Jumbo: {
	 	margin: 'auto',
        width: 'auto',
        backgroundColor: 'rgb(0, 188, 212)',
        height: '80px',
        textAlign: 'center'
    }
}

class LandingText extends React.Component {
	render() {
		return(
			<div>
				<Section>
					<Container breakpoint="fullhd" style={JumboStyle.Jumbo}>
						<p className="bd-notification is-danger">
							<Heading size={5} renderAs="p">
							Breakpoint Fullhd
							</Heading>
							<Heading subtitle renderAs="p">
							Container
							</Heading>
						</p>
					</Container>
				</Section>
			</div>
		);
	}
}*/

export default LandingText;