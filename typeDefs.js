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
    getAllTickets: [Ticket!]
    getTicket(id: ID!): Ticket!
  }

  input TicketInput {
    username: String
    status: String
  }

  type Mutation {
    createTicket(ticket: TicketInput!): Ticket
    deleteTicket(id: ID!): String
    updateTicket(id: ID!, ticket: TicketInput!): Ticket
  }
`

module.exports = { typeDefs }
