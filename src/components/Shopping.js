import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import ProductCards from './ProductCards';

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

export default function Shopping({cartContent, setCartContent, itemsInCart}) {
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

  return <div>
    <h1>Shopping Page</h1>
    <ProductCards shopItems={shopItems} cartContent={cartContent} addToCart={addToCart} changeContentAmount={changeContentAmount} />
    <Link to='/cart'>
      <h3>Go to cart({itemsInCart})</h3>
    </Link>
  </div>
}