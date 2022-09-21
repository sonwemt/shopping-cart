import { Link } from "react-router-dom";

export default function Navbar({itemsInCart}) {
  
  return <nav>
    <h1>Header</h1>
    <ul>
      <Link to='/'>
        <li>Homepage</li>
      </Link>
      <Link to='/shop'>
        <li>Shop</li>
      </Link>
      <Link to='/cart'>
        <li>Shopping Cart({itemsInCart})</li>
      </Link>
    </ul>
  </nav>
}