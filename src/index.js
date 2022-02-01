import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './Pages/App';
import allHelper from './_helpers';


ReactDOM.render(
  <Provider store={allHelper.store}>
    <App />
  </Provider>,

  document.getElementById('root')
);

