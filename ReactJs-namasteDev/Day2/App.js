import React from 'react';
import ReactDOM from 'react-dom/client';
const heading1 = React.createElement('h1', {}, 'Heading1 from parcel');
const heading2 = React.createElement('h2', {}, 'Heading2');

const container = React.createElement('div', { id: 'container' }, [
  heading1,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(container);
