import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import CreateListing from './CreateListing.js';
import registerServiceWorker from './registerServiceWorker';

const routes = (
    <BrowserRouter> 
        <div>
            <Route path="/" component={App} exact={true} />
            <Route path="/create" component={CreateListing} />
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
