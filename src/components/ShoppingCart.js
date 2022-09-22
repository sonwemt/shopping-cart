export default function ShoppingCart({itemsInCart, cartContent}) {
  return <div>
    <h2>Shopping Cart</h2>
    <div>A theorical shopping cart page goes here</div>
    <div>You have added {itemsInCart} items so far</div>
    <ul>
      {cartContent.map((item) => {
        return<li key={item.id}>
          <div>{item.name}</div>
          <div>{item.amount}</div>
        </li>
      })}
    </ul>
  </div>
}