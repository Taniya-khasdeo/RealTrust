const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// Add project
router.post("/", async (req, res) => {
    await Project.create(req.body);
    res.json({ message: "Project added successfully" });
});

// Get all projects
router.get("/", async (req, res) => {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
});

module.exports = router;
