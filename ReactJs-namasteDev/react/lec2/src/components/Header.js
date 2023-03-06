import { useState, useContext } from 'react';
import Logo from '../../assets/images/foodVilla.jpg';
import { Link } from 'react-router-dom';
import userContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Title = () => (
  <a href="/">
    <img className="logo h-28 p-2" src={Logo} alt="Food Villa" />
  </a>
);
const LoggedInUser = () => {
  //API call to check authentication
  return true;
};
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { user } = useContext(userContext);

  //we can subscribe to the required part of store
  const cartItems = useSelector((store) => store.cart.items); //** subscribing ******

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />
      <div className="nav-items ">
        <ul className="flex py-10 justify-between">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <Link>
            <li className="px-2">Cart</li>
          </Link>
        </ul>
      </div>
      <p>{cartItems.length}</p>
      {user.name}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
