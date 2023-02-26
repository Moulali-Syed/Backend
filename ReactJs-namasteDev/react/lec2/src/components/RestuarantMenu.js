import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';

const RestuarantMenu = () => {
  //using this useParams hook , we read dynamic url params
  const params = useParams();
  //   console.log(params);
  const { id } = params;

  // const [restaurant, setRestaurant] = useState(null);

  const restaurant = useRestaurant(id);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <h1>Restaurant id:{id}</h1>
        <h2>{restaurant.name}</h2>
        <img
          src={
            'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' +
            restaurant.cloudinaryImageId
          }
          alt="food"
        />
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating} ⭐ stars</h3>
        <h3>{restaurant.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {/* {console.log(restaurant)} */}
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestuarantMenu;
