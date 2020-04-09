import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import reducer from './reducers/choicesProduct.js'
import { createStore ,  applyMiddleware, compose} from 'redux'

const composeEnhancers =
 typeof window === 'object' &&
 window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const middleware = []
const enhancer = composeEnhancers(
 applyMiddleware(...middleware));
const store = createStore(reducer , enhancer )


ReactDOM.render(
  <Provider store={store} >
    <Router>
       <React.StrictMode>
         <App />
       </React.StrictMode>
    </Router>
  </Provider >,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
