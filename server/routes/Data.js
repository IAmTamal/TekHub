const express = require("express");
const User = require("../models/UserSchema");
const Project = require("../models/ProjCommSchema");
const router = express.Router();
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

router.get("/getallprojects", async (req, res) => {
    try {

        const projects = await Project.find({ type: "project" });
        return res.status(201).json(projects)


    } catch (error) {
        res.status(500).json({ message: "Internal server error, try again later" })
    }
})

router.get("/getallcommunities", async (req, res) => {
    try {

        const communities = await Project.find({ type: "communities" });
        return res.status(201).json(communities)

    } catch (error) {
        res.status(500).json({ message: "Internal server error, try again later" })
    }
})


module.exports = router;