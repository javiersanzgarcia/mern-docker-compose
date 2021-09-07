import './CartPage.css'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

// Actions
import {addToCart, removeFromCart} from '../redux/actions/cartActions'

// Components
import CartItem from '../components/CartItem'

const CartPage = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state: any) => state.cart)
  const {cartItems} = cart

  const qtyChangeHandler = (id: number, qty: number) => {
    dispatch(addToCart(id, qty))
  }

  const removeCartHandler = (id: number) => {
    dispatch(removeFromCart(id))
  }

  const getCartCount = () => {
    return cartItems.reduce(
      (qty: number, item: any) => Number(item.quantity) + qty,
      0,
    )
  }

  const getCartSubTotal = () => {
    return cartItems.reduce(
      (price: any, item: any) =>
        Number(item.price * item.quantity) + price,
      0,
    )
  }

  return (
    <>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <div>
              Your cart is empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item: any) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeCartHandler={removeCartHandler}
              />
            ))
          )}
        </div>

        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal().toFixed(2)}</p>
          </div>
          <div>
            <button>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartPage
