import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestuarantMenu from './components/RestuarantMenu';
import Profile from './components/Profile';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Shimmer from './components/Shimmer';
import { Provider } from 'react-redux';
import store from './utils/store';
import Cart from './components/Cart';
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
const Instamart = lazy(() => import('./components/Instamart'));

const AppLayout = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Header />
        {
          /* <About /> // if path is /about
      <Body /> // if path is /
      <Contact /> // if path is /contact */
          // this is the outlet to fill in different pages
          //react-router-dom gives us Outlet - this is filled by the children configuration we need
        }
        <Outlet />
        <Footer />
      </React.Fragment>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
        children: [
          {
            path: 'profile', //donot specify slash here , then only it will work
            element: <Profile />,
          },
        ],
      },
      {
        path: '/contact',
        element: <Contact />,
      },

      {
        path: 'restaurant/:id',
        element: <RestuarantMenu />,
      },

      {
        path: '/instamart',
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: '/Cart',
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
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
