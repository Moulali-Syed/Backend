import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
/*
      Header
        logo
        NavItems(RightSide)
        Cart
      Body
        Search Bar
        Restuarant list
          restaurant card
            image
            name
            rating
            cusines

      Footer
        links
     */

//header component

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
/*


// all this  below code is respect to lec-2 and lec-3
import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement(
  'h1',
  { key: 'h1' },
  'Namaste React from parcel'
);
const heading2 = React.createElement(
  'h2',
  { key: 'h2' },
  'Hello Welcome to Frontend framework'
);
const container = React.createElement('div', {}, [heading1, heading2]);

/*
we have a requirement as below 
*/
/*
const h1 = React.createElement('h1', {}, 'Namaste React');
const li1 = React.createElement('li', {}, 'About Us');
const li2 = React.createElement('li', {}, 'Support');
const li3 = React.createElement('li', {}, 'Help');
const ul = React.createElement('ul', {}, [li1, li2, li3]);
const heading = React.createElement('div', { className: 'header' }, [h1, ul]);

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(container);
root.render(heading);
*/
