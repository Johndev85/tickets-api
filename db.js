// const { MONGODB_URI } = process.env

// if (!MONGODB_URI) {
//   throw new Error("MONGODB_URI must be defined")
// }

const { connect } = require("mongoose")

const connectDB = async () => {
  try {
    await connect(
      "mongodb+srv://johnb:9fAMeG5FiuGvMxvz@tickets.d4cnc6q.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    console.log("MongoDB connected")
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}

module.exports = { connectDB }
