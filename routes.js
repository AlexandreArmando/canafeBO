const express = require("express")
const Client = require("./models/Client")
const router = express.Router()

// Get all clients
router.get("/clients", async (req, res) => {
	const clients = await Client.find()
	res.send(clients)
})

router.get("/clients/:id", async (req, res) => {
	try {
		const client = await Client.findOne({ id: req.params.id })
		res.send(client)
	} catch {
		res.status(404)
		res.send({ error: "Client doesn't exist!" })
	}
})

router.post("/client", async (req, res) => {
	const client = new Client({
		id: req.body.id,
        name: req.body.name,
        firstName: req.body.firtName,
        phoneNumber: req.body.phoneNumber,
        credit: req.body.credit,
        arrival: 0
	})
	await client.save()
	res.send(client)
})

router.patch("/clients/:id", async (req, res) => {
	try {
		const client = await Client.findOne({ id: req.params.id })

		if (req.body.name) {
			client.name = req.body.name
		}

		if (req.body.firstName) {
			client.firstName = req.body.firstName
        }
        
        if (req.body.phoneNumber) {
			client.phoneNumber = req.body.phoneNumber
        }
        
        if (req.body.credit) {
			client.credit = req.body.credit
        }
        
        if (req.body.arrival) {
			client.arrival = req.body.arrival
		}

		await client.save()
		res.send(client)
	} catch {
		res.status(404)
		res.send({ error: "Client doesn't exist!" })
	}
})

router.delete("/clients/:id", async (req, res) => {
	try {
		await Client.deleteOne({ id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Client doesn't exist!" })
	}
})

module.exports = router