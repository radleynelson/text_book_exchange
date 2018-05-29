import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Field, Label, Control, Input } from 'react-bulma-components/full';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
