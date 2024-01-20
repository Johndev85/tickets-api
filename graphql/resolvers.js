const ticket = require("../models/ticket")
const Ticket = require("../models/ticket")

const resolvers = {
  Query: {
    getAllTickets: async () => {
      const tickets = await Ticket.find()
      return tickets
    },
    getTicket: async (_, args) => {
      const { id } = args
      const ticket = await Ticket.findById(id)
      return ticket
    },
  },
  Mutation: {
    createTicket: async (_, args) => {
      const { username, status } = args.ticket
      const ticket = new Ticket({ username, status })
      await ticket.save()
      return ticket
    },
    deleteTicket: async (_, args) => {
      const { id } = args
      await Ticket.findByIdAndDelete(id)
      return "Ticket deleted."
    },
    updateTicket: async (_, args) => {
      const { id } = args
      await Ticket.findByIdAndUpdate(id, { $set: args.ticket }, { new: true })
      return ticket
    },
  },
}

module.exports = { resolvers }
