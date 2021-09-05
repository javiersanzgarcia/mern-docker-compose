import mongoose from 'mongoose'

const connectDB: Function = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI_DOCKER!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('MongoDB connection SUCCESS')
  } catch (error) {
    console.error('MongoDB connection FAIL')
    process.exit(1)
  }
}

export default connectDB
