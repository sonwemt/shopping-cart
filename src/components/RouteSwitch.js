import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import Shopping from "./Shopping";
import ShoppingCart from "./ShoppingCart";
import uniqid from 'uniqid';

const shopItems = [
  {
    name: 'Shoe',
    description: 'Description of a shoe',
    id: uniqid(),
    index: 0,
  },
  {
    name: 'Socks',
    description: 'Description of a set of socks',
    id: uniqid(),
    index: 1,
  },
  {
    name: 'Sweater',
    description: 'Description of a sweater',
    id: uniqid(),
    index: 2,
  },
  {
    name: 'T-Shirt',
    description: 'Description of a t-shirt',
    id: uniqid(),
    index: 3,
  },
  {
    name: 'Pants',
    description: 'Description of a pair of pants',
    id: uniqid(),
    index: 4,
  },
  {
    name: 'Gloves',
    description: 'Description of a set of gloves',
    id: uniqid(),
    index: 5,
  }, 
]

export default function RouteSwitch() {
  const [cartContent, setCartContent] = useState([]);
  const [itemsInCart, setItemsInCart] = useState(0);
  useEffect(() => {
    let total = 0;
    cartContent.forEach((item) => {
      if(item.amount > 0) {
       total += item.amount;
      }
    })
    setItemsInCart(total);
  }, [cartContent])

  const addToCart = (amount, index) => {
    const isAdded = cartContent.find((item) => item.id === shopItems[index].id);
    if(isAdded){
      const newArray = cartContent.splice(0);
      console.log(newArray);
      newArray[isAdded.index].amount = Number(amount);
      setCartContent(newArray);
      return;
    }
    setCartContent(cartContent => cartContent.concat(
      { 
        id: shopItems[index].id,
        name: shopItems[index].name,
        amount: Number(amount),
        index: cartContent.length,
      }));
  }

  const changeContentAmount = (index, increase) => {
    const newArray = cartContent.splice(0);
    if(increase) {
      newArray[index].amount += 1;
    } else {
        newArray[index].amount -= 1;
    }
    setCartContent(newArray);
  }

  return (<BrowserRouter>
    <Navbar itemsInCart={itemsInCart}/>
    <Routes>
      <Route path='/'element={<Homepage />}/>  
      <Route path='/shop/*' element={<Shopping 
      cartContent={cartContent}
      shopItems={shopItems}
      addToCart={addToCart}
      changeContentAmount={changeContentAmount}
      itemsInCart={itemsInCart} /> }> 
      </Route>
      <Route path="/shop/:id" element={<ProductCard 
      cartContent={cartContent}
      addToCart={addToCart}
      changeContentAmount={changeContentAmount}
      itemsInCart={itemsInCart} 
      />} />
      <Route path='/cart' element={<ShoppingCart itemsInCart={itemsInCart}/>} />
    </Routes>
  </BrowserRouter>);
}