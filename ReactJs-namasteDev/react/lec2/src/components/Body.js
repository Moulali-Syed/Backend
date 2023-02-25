import { biryaniHouse } from '../config';
import RestuarantCard from './RestuarantCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
const filterData = (searchText, biryanis) => {
  const filterDatab = biryanis.filter((bir) => {
    // console.log(bir.data.name);
    return bir?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase());
  });

  return filterDatab;
};
const Body = () => {
  // let searchTxt = 'KFC';
  //searchText is local state variable
  const [searchText, setSearchText] = useState('');
  const [allbiryanis, setAllBiryanis] = useState([]);
  const [filteredbiryanis, setFilteredBiryanis] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    console.log(data);
    //always use optional chaining
    setAllBiryanis(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredBiryanis(json?.data?.cards[2]?.data?.data?.cards);
  }

  //Conditional Rendering
  //if restuarant is empty=> show shimmer ui
  //if restaurant has data =>show actual data UI

  //if i dont have anything in allbiryanis - dont return anything
  //this is also called early return
  if (!allbiryanis) return null;

  //if there is no such product , we must display something
  // if (filteredbiryanis?.length === 0)
  //   return <h1>No Restaurant Match to your filter</h1>;

  return allbiryanis.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            // console.log(searchText);
            // console.log(typeof searchText);

            const data = filterData(searchText, allbiryanis); //have to filter based on search text
            //entered in the search box, so 1st argument it is passed
            //and we have to filter from the state variable - biryanis
            //so 2nd argument it is called

            //then we have to update the biryaniHouse (array of objects)
            //we cannot do it directly , we have to maintain state of this variable
            //so create a state variable , using useState

            //then update the state - biryanis
            setFilteredBiryanis(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredbiryanis.map((bir, index) => {
          return (
            <Link to={'/restaurant/' + bir.data.id} key={index}>
              <RestuarantCard biryani={bir} />;
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
