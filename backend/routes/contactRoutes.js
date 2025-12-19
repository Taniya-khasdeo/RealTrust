const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST contact form
router.post("/", async (req, res) => {
    try {
        const { fullName, email, mobile, city } = req.body;

        if (!fullName || !email || !mobile || !city) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newContact = new Contact({
            fullName,
            email,
            mobile,
            city
        });

        await newContact.save();

        res.status(201).json({ message: "Contact form submitted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.get("/", async (req, res) => {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
});
module.exports = router;
