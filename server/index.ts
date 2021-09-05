import {config} from 'dotenv'
import {resolve} from 'path'
config({path: resolve(__dirname, '.env')})

import express from 'express'
import productRoutes from './routes/productRoutes'
import connectDB from './config/db'

connectDB()

const app = express()
app.use(express.json())
app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
