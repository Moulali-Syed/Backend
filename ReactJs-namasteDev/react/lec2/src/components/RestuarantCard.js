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
export default RestuarantCard;
