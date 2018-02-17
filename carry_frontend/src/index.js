import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import GetMyRide from './Components/GetMyRide';

ReactDOM.render(<GetMyRide />, document.getElementById('content'));
registerServiceWorker();
