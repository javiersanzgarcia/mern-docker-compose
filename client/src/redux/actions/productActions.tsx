import * as actionTypes from '../constants/productConstants'
import axios from 'axios'

export const getProducts: Function = () => async (dispatch: any) => {
  try {
    dispatch({type: actionTypes.GET_PRODUCTS_REQUEST})
    const {data} = await axios.get(
      'http://localhost:5000/api/products',
    )
    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    })
  } catch (error: any) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getProductDetails: Function =
  (id: number) => async (dispatch: any) => {
    try {
      dispatch({type: actionTypes.GET_PRODUCT_DETAILS_REQUEST})
      const {data} = await axios.get(
        `http://localhost:5000/api/products/${id}`,
      )
      dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
        payload: data,
      })
    } catch (error: any) {
      dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const removeProductDetails = () => (dispatch: any) => {
  dispatch({type: actionTypes.GET_PRODUCT_DETAILS_RESET})
}
