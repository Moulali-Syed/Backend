const RestuarantCard = (props) => {
  return (
    <div className="card">
      <img
        src={
          'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' +
          props.biryani?.data?.cloudinaryImageId
        }
        alt="Biryani"
      />
      <h2>{props.biryani?.data?.name}</h2>
      <h3>{props.biryani?.data?.cuisines?.join(', ')}</h3>
      <h4>⭐ {props.biryani?.data?.avgRating}</h4>
    </div>
  );
};
export default RestuarantCard;
