import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import CreateListing from './CreateListing.js';
import registerServiceWorker from './registerServiceWorker';

const NotFoundPage = () => (
    <div>
        404 -
    </div>
);

const routes = (
    <BrowserRouter> 
        <Switch>
            <Route path="/" component={App} exact={true} />
            <Route path="/create" component={CreateListing} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
