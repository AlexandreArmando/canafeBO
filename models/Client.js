const mongoose = require("mongoose")

const schema = mongoose.Schema({
	id: String,
    name: String,
    firstName: String,
    phoneNumber: String,
    credit: Number,
    arrival: Number
})

module.exports = mongoose.model("Client", schema)