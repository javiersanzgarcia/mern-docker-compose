import './HomePage.css'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

// Component
import Product from '../components/Product'

// Actions
import {getProducts as listProducts} from '../redux/actions/productActions'

const HomePage = () => {
  const dispatch = useDispatch()
  const getProducts = useSelector((state) => state.getProducts)
  const {products, loading, error} = getProducts

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Producs</h2>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product key={product._id} product={product} />
          ))
        )}
      </div>
    </div>
  )
}

export default HomePage
