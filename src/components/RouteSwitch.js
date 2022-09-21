import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import Shopping from "./Shopping";
import ShoppingCart from "./ShoppingCart";

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

  return (<BrowserRouter>
    <Navbar itemsInCart={itemsInCart}/>
    <Routes>
      <Route path='/'element={<Homepage />}/>  
      <Route path='/shop' element={<Shopping cartContent={cartContent} setCartContent={setCartContent} itemsInCart={itemsInCart} />}/>
      <Route path='/cart' element={<ShoppingCart itemsInCart={itemsInCart}/>} />
    </Routes>
  </BrowserRouter>);
}