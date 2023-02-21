import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement('h1', {}, 'Namaste React from parcel');
const heading2 = React.createElement(
  'h2',
  {},
  'Hello Welcome to Frontend framework'
);
const container = React.createElement('div', {}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(container);
