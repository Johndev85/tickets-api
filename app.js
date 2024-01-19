const express = require("express")
const { ApolloServer } = require("apollo-server-express")

const { typeDefs } = require("./typeDefs")
const { resolvers } = require("./resolvers")
const { connectDB } = require("./db")

const app = express()
connectDB()

module.exports = app
app.get("/", (req, res) => res.send("This is API-REST"))

async function start() {
  //setup apollo server
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  })

  await apolloServer.start()
  apolloServer.applyMiddleware({ app })

  app.use("*", (req, res) => res.status(404).send("404 Not found"))

  app.listen(3000, () => {
    console.log("Server started on port 3000")
  })
}

start()
