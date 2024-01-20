require("dotenv").config()
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const { ApolloServer } = require("apollo-server-express")

const { typeDefs } = require("../graphql/typeDefs")
const { resolvers } = require("../graphql/resolvers")
const { connectDB } = require("../utils/db")

const { router } = require("./routes/routes.js")
const { PORT } = require("./config.js")

const app = express()
app.use(cors())
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
connectDB()

app.use("/api", router)
app.use(express.json())

//setup apollo server
async function start() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  })
  await apolloServer.start()
  apolloServer.applyMiddleware({ app })

  app.use("/api/*", (req, res) => res.status(404).send("404 Not found"))

  app.listen(PORT, () => {
    console.log("Server started on port", PORT)
  })
}
start()
