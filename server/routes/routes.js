const { Router } = require("express")
const Ticket = require("../../models/ticket")

const router = Router()

//get all tickets with pagination
router.get("/tickets", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 10
    const skip = (page - 1) * limit

    const tickets = await Ticket.find().skip(skip).limit(limit)
    const total = await Ticket.countDocuments()
    res.send({
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      tickets,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//get a single ticket
router.get("/tickets/:id", async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id)
    if (!ticket) {
      res.status(404).send("No ticket found")
    } else {
      res.send(ticket)
    }
  } catch (error) {
    throw new Error(error.message)
  }
})

//create a ticket
router.post("/tickets", async (req, res) => {
  try {
    const ticket = new Ticket(req.body)
    await ticket.save()
    res
      .status(201)
      .send({ status: 201, message: "Ticket created successfully" })
  } catch (error) {
    throw new Error(error.message)
  }
})

//delete a ticket
router.delete("/tickets/:id", async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id)
    if (!ticket) {
      res.status(404).send("No ticket found")
    } else {
      res
        .status(200)
        .send({ status: 200, message: "Ticket deleted successfully", ticket })
    }
  } catch (error) {
    throw new Error(error.message)
  }
})

//update a ticket
router.put("/tickets/:id", async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!ticket) {
      res.status(404).send("No ticket found")
    } else {
      res
        .status(200)
        .send({ status: 200, message: "Ticket updated successfully", ticket })
    }
  } catch (error) {
    throw new Error(error.message)
  }
})

module.exports = { router }
