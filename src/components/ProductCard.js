import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/productCard.css";

export default function ProductCard(props, item) {
  const { cartContent, addToCart, changeContentAmount } = props;
  const {id, index, name, description} = useLocation().state; 

  const [amount, setAmount] = useState(1);
  const [isInCart, setIsInCart] = useState(cartContent.find((cartItem) => cartItem.id === id));

  const handleSubmit = (e) => {
    e.preventDefault();
    if(amount > 0) {
      addToCart(amount, index);
    }
  }

  const handleIncrease = () => {
    changeContentAmount(isInCart.index, true);
  }

  const handleDecrease = () => {
    if(isInCart.amount > 0) {
      changeContentAmount(isInCart.index, false);
    }
  }

  useEffect(() => {
      setIsInCart(cartContent.find((cartItem) => cartItem.id === id));
      if(isInCart) {
        if(isInCart.amount > 0) {
          setAmount(isInCart.amount);
        } else {
          setAmount(1);
        }
      }
  }, [cartContent, id, isInCart]);

  useEffect(() => {
    console.log(isInCart);
  }, [cartContent, isInCart])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="itemName">Name: {name}</div>
        <div>Description: {description}</div>
        {!isInCart || isInCart.amount < 1? 
        <>
          <label htmlFor={item.id}>Amount:</label>
          <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} min="1"></input>
          <button>Add to cart</button> </> : 
        <>
          <div>Added to cart! <button type="button" onClick={handleDecrease}>-</button> <span>{isInCart.amount}</span> <button type="button" onClick={handleIncrease}>+</button></div>
          <Link to="/cart"><button type="button">Go to cart</button></Link>
        </>
        }
      </form>
      <Link to='/shop'>Return?</Link>
    </div>
  );
}