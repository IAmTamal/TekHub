// All routes related to user's LOGIN AND REGISTER

const express = require("express");
const User = require("../models/UserSchema");
const router = express.Router();
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

// Route 1  - User Signup
router.post("/signup", async (req, res) => {
    try {
        const data = req.body;
        const email = data.email;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        const hashpassword = await bcrypt.hash(data.password, 10);
        const UserData = User({
            name: data.name,
            email: data.email,
            password: hashpassword,
        });


        await UserData.save();
        res.status(201).json({ message: "Registration successful, please login" })
    } catch (e) {
        res.status(500).json({ message: "Internal Server Error" })
    }
});


router.post("/login", async (req, res) => {
    try {
        const data = req.body;
        const email = data.email;
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(409).json({ message: "User does not exist" });
        }

        const isPasswordCorrect = await bcrypt.compare(data.password, existingUser.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, "test",
            { expiresIn: "1h" });

        res.status(200).json({ result: existingUser, token });



    } catch (error) {

    }
})



module.exports = router;



