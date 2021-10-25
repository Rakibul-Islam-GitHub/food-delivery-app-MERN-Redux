import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './bootstrap.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
