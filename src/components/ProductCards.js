
import ProductCard from "./ProductCard";

export default function ProductCards({shopItems, addToCart, cartContent, changeContentAmount}) {
  return (
    <ul>
      {shopItems.map((item) => {
      return (
          <ProductCard key={item.id} item={item} addToCart={addToCart} cartContent={cartContent} changeContentAmount={changeContentAmount}/>)
      })}
    </ul>
  );
}