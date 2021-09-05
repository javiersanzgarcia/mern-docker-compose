import {Request, Response} from 'express'
import Product from '../models/Product'

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({})
    res.json(products)
  } catch (error) {
    console.error(error)
    res.status(500).json({message: 'Server Error'})
  }
}

const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id)
    res.json(product)
  } catch (error) {
    console.error(error)
    res.status(500).json({message: 'Server Error'})
  }
}

export {getAllProducts, getProductById}
