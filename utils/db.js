const { MONGODB_URI } = process.env

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI must be defined")
}

const { connect } = require("mongoose")

const connectDB = async () => {
  try {
    await connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("MongoDB connected")
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}

module.exports = { connectDB }
