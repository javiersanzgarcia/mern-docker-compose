import './CartItem.css'
import {Link} from 'react-router-dom'

const CartItem = (
  item: any,
  qtyChangeHandler: any,
  removeCartHandler: any,
) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link
        to={`/product/${item.product}`}
        className="cartItem__name"
      >
        <p>{item.name}</p>
      </Link>
      <p className="cartitem__price">${item.price}</p>
      <select
        value={item.quantity}
        className="cartItem__select"
        onChange={(e) =>
          qtyChangeHandler(item.product, e.target.value)
        }
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button
        className="cartItem__deleteBtn"
        onClick={() => removeCartHandler(item.product)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default CartItem
