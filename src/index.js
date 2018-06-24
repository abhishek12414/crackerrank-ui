import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Provider }  from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import reducer from './_store/reducer';


const store = createStore(reducer, {}, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
