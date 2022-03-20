import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import {Frame} from './frame/Frame.js';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Frame/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
