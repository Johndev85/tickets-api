const { Schema, model } = require("mongoose")

const ticketSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
      minLength: [3, "username must be at least 3 characters"],
      maxLength: [30, "username must be at most 30 characters"],
    },
    status: String,
  },
  { timestamps: true }
)

module.exports = model("Ticket", ticketSchema)
