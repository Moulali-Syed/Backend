const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <div>
        <h1 className="font-bold text-3xl">Cart Items - {items.length}</h1>
      </div>
    </>
  );
};
