import React from 'react';
import ReactDOM from 'react-dom';
import './Footer.css';

/*const footerStyle = {
	position: 'fixed',
	backgroundColor: 'rgb(0, 188, 212)',
	color: 'white',
	left: '0',
	bottom: '0',
	width: '100%',
	height: '50px',
	textAlign: 'center'
};

class Footer extends React.Component {
	render() {
	  return (
		<div style={footerStyle}>
			<p> I Am A Footer!</p>
		</div>
		);
	}
}
*/

class Footer extends React.Component {
	render() {
	  return (
		<footer className="footer-distributed">

			<div className="footer-right">

				<a><i className="fa fa-facebook"></i></a>
				{' '}
				<a><i className="fa fa-twitter"></i></a>
				{' '}
				<a><i className="fa fa-instagram"></i></a>

			</div>

			<div className="footer-left">

				<p className="footer-links">
					<a>Home </a> 
					{' '}·{' '}
					<a>Buy </a>
					{' '}·{' '}
					<a>Sell </a>
					{' '}·{' '}
					<a>Contact </a> 
					{' '}·{' '}
					<a>My Account</a>	 
					{' '}·{' '} 	
					<a>My Favorites</a>
				</p>

				<p>BookMark &copy; 2018</p>
			</div>

		</footer>
		);
	}
}


export default Footer;