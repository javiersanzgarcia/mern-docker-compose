import {Request, Response} from 'express'
import Product from '../models/Product'

const getAllProducts: Function = async (
  req: Request,
  res: Response,
) => {
  try {
    const products: string = await Product.find({})
    res.json(products)
  } catch (error) {
    console.error(error)
    res.status(500).json({message: 'Server Error'})
  }
}

const getProductById: Function = async (
  req: Request,
  res: Response,
) => {
  try {
    const product: string = await Product.findById(req.params.id)
    res.json(product)
  } catch (error) {
    console.error(error)
    res.status(500).json({message: 'Server Error'})
  }
}

export {getAllProducts, getProductById}
