import React from 'react';
import ReactDOM from 'react-dom/client';
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

const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
      alt="Food Villa"
    />
  </a>
);
//header component
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const biryaniHouse = [
  {
    name: 'Biryani House',
    image:
      'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cr8i1m6va7w7czqnp2hs',
    cusines: ['Biryani', 'Indian'],
    rating: 4.2,
  },
  {
    image:
      'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/pjqabgzxuqln6dvjqmz8',
    cusines: ['Biryani', 'Indian'],
    rating: 4.2,
  },
  {
    image:
      'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ghq1hlkffwxbaylarzgp',
    cusines: ['Biryani', 'Indian'],
    rating: 4.2,
    name: 'Biryani House',
  },
  {
    image:
      'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ixbge2at5ln0l00xovxh',
    cusines: ['Biryani', 'Indian'],
    rating: 4.2,
    name: 'Biryani House',
  },
  {
    image:
      'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/byruentuyby9zzyjdniw',
    cusines: ['Biryani', 'Indian'],
    rating: 4.2,
    name: 'Biryani House',
  },
  {
    image:
      'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/lmjf4h5nvkldwghxhdri',
    rating: 4.2,
    cusines: ['Biryani', 'Indian'],
    name: 'Biryani House',
  },
];

const RestuarantCard = (props) => {
  return (
    <div className="card">
      <img src={props.biryani?.image} alt="Biryani" />
      <h2>{props.biryani?.name}</h2>
      <h3>{props.biryani?.cusines?.join(', ')}</h3>
      <h4>⭐ {props.biryani?.rating}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <>
      <div className="restaurant-list">
        <RestuarantCard biryani={biryaniHouse[0]} />
        <RestuarantCard biryani={biryaniHouse[1]} />
        <RestuarantCard biryani={biryaniHouse[2]} />
        <RestuarantCard biryani={biryaniHouse[3]} />
        <RestuarantCard biryani={biryaniHouse[4]} />
        <RestuarantCard biryani={biryaniHouse[5]} />
      </div>
    </>
  );
};
const Footer = () => {
  return <h4>Footer</h4>;
};
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
