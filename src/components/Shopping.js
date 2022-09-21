import { Link } from 'react-router-dom';
import ProductCards from './ProductCards';

export default function Shopping(props) {
  return <div>
    <h1>Shopping Page</h1>
    <ProductCards shopItems={props.shopItems} />
    <Link to='/cart'>
      <h3>Go to cart({props.itemsInCart})</h3>
    </Link>
  </div>
}