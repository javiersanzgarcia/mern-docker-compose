import './SideDrawer.css'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

const SideDrawer = ({show, click}) => {
  const sideDrawerClass = ['sidedrawer']
  if (show) {
    sideDrawerClass.push('show')
  }

  const cart = useSelector((state) => state.cart)
  const {cartItems} = cart

  const getCartCount = () => {
    return cartItems.reduce(
      (qty, item) => Number(item.quantity) + qty,
      0,
    )
  }

  return (
    <div className={sideDrawerClass.join(' ')}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            Cart
            <span className="sidedrawer__cartbadge">
              {getCartCount()}
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </div>
  )
}

export default SideDrawer
