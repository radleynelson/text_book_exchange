import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './index.css';
import App from './App';
import NavBar from './NavBar';
import CreateListing from './CreateListing.js';
import registerServiceWorker from './registerServiceWorker';


const NotFoundPage = () => (
    <div>
        404 - <Link to="/">Go to Home</Link>
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
        {/*Place components here that we want on every page of our app*/}
        <Switch>
            <Route path="/" component={App} exact={true} />
            <Route path="/create" component={CreateListing} />
            <Route component={NotFoundPage} />
        </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
