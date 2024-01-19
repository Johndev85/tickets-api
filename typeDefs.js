const { gql } = require("apollo-server-express")

const typeDefs = gql`
  type Ticket {
    id: ID
    username: String
    status: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    hello: String!
    getAllTickets: [Ticket!]
  }

  type Mutation {
    createTicket(username: String!, status: String!): Ticket!
  }
`

module.exports = { typeDefs }
