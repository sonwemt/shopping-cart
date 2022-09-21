import { useEffect, useState } from "react";
import "../styles/productCard.css";

export default function ProductCard({item, cartContent, addToCart, changeContentAmount}) {
  const [amount, setAmount] = useState(1);
  const [isInCart, setIsInCart] = useState(cartContent.find((cartItem) => cartItem.id === item.id));

  const handleSubmit = (e) => {
    e.preventDefault();
    if(amount > 0) {
      addToCart(amount, item.index);
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
      setIsInCart(cartContent.find((cartItem) => cartItem.id === item.id));
      if(isInCart) {
        if(isInCart.amount > 0) {
          setAmount(isInCart.amount);
        } else {
          setAmount(1);
        }
      }
  }, [cartContent, item, isInCart]);

  useEffect(() => {
    console.log(isInCart);
  }, [cartContent, isInCart])

  return (
    <form onSubmit={handleSubmit}>
      <div className="itemName">Name: {item.name}</div>
      <div>Description: {item.description}</div>
      {!isInCart || isInCart.amount < 1? 
      <>
        <label htmlFor={item.id}>Amount:</label>
        <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} min="1"></input>
        <button>Add to cart</button> </> : 
      <>
        <div>Added to cart! <button type="button" onClick={handleDecrease}>-</button> <span>{isInCart.amount}</span> <button type="button" onClick={handleIncrease}>+</button></div>
        <button disabled={true}>Add to cart</button>
      </>
      }
    </form>
  );
}