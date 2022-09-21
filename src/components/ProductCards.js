
import { Link } from "react-router-dom";


export default function ProductCards(props) {
  return (
      <ul>
       {props.shopItems.map((item) => {
            return (<li key={item.id}>
              <Link to={`/shop/${item.id}`} state={{id: item.id, index: item.index, name: item.name, description: item.description}}>{item.name}</Link>
            </li>)
            })}
      </ul>
  )
}