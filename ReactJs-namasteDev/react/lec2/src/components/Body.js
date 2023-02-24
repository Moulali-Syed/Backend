import { biryaniHouse } from '../config';
import RestuarantCard from './RestuarantCard';
import { useState } from 'react';

const filterData = (searchText, biryanis) => {
  const filterDatab = biryanis.filter((bir) => {
    return bir.name.includes(searchText);
  });

  return filterDatab;
};
const Body = () => {
  // let searchTxt = 'KFC';
  //searchText is local state variable
  const [searchText, setSearchText] = useState('');
  const [biryanis, setBiryanis] = useState(biryaniHouse);
  return (
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

            const data = filterData(searchText, biryanis); //have to filter based on search text
            //entered in the search box, so 1st argument it is passed
            //and we have to filter from the state variable - biryanis
            //so 2nd argument it is called

            //then we have to update the biryaniHouse (array of objects)
            //we cannot do it directly , we have to maintain state of this variable
            //so create a state variable , using useState

            //then update the state - biryanis
            setBiryanis(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {biryanis.map((bir, index) => {
          return <RestuarantCard biryani={bir} key={index} />;
        })}
      </div>
    </>
  );
};

export default Body;
