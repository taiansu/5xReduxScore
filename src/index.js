import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppReducer from './AppReducer'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

var store = createStore(AppReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
