const Ticket = require("./models/ticket")

const resolvers = {
  Query: {
    hello: () => "Hello world!",
    getAllTickets: async () => {
      const tickets = await Ticket.find()
      return tickets
    },
  },
  Mutation: {
    createTicket: async (_, args) => {
      const { username, status } = arg
      const ticket = new Ticket({ username, status })
      await ticket.save()
      return ticket
    },
  },
}

module.exports = { resolvers }
