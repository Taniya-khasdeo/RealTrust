const express = require("express");
const router = express.Router();
const Client = require("../models/Client");

// Add client
router.post("/", async (req, res) => {
    await Client.create(req.body);
    res.json({ message: "Client added successfully" });
});

// Get all clients
router.get("/", async (req, res) => {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json(clients);
});

module.exports = router;
