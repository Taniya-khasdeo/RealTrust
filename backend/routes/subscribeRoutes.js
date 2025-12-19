const express = require("express");
const router = express.Router();
const Subscriber = require("../models/Subscriber");

router.post("/", async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }

        const exists = await Subscriber.findOne({ email });
        if (exists) {
            return res.json({ message: "Already subscribed" });
        }

        await Subscriber.create({ email });
        res.json({ message: "Subscribed successfully" });

    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});
router.get("/", async (req, res) => {
    const emails = await Subscriber.find().sort({ createdAt: -1 });
    res.json(emails);
});
module.exports = router;
