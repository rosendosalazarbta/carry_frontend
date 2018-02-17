import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GetMyRide from './Components/GetMyRide';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GetMyRide />, div);
  ReactDOM.unmountComponentAtNode(div);
});
