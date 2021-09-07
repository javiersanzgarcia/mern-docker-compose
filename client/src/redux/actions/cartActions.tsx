import * as actionTypes from '../constants/cartConstants'
import axios from 'axios'

export const addToCart: Function =
  (id: number, quantity: number) =>
  async (dispatch: any, getState: any) => {
    const {data} = await axios.get(
      `http://localhost:5000/api/products/${id}`,
    )

    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: {
        product: data._id,
        name: data.name,
        imageUrl: data.imageUrl,
        price: data.price,
        countInStock: data.countInStock,
        quantity,
      },
    })

    localStorage.setItem(
      'cart',
      JSON.stringify(getState().cart.cartItems),
    )
  }

export const removeFromCart: Function =
  (id: number) => (dispatch: any, getState: any) => {
    dispatch({
      type: actionTypes.REMOVE_FROM_CART,
      payload: id,
    })

    localStorage.setItem(
      'cart',
      JSON.stringify(getState().cart.cartItems),
    )
  }
