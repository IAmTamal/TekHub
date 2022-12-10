const express = require("express");
const User = require("../models/UserSchema");
const router = express.Router();
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var multer = require("multer");

const checkAuth = (req, res) => {
    const token = req.header("Authorization").replace("Bearer ", "");
    if (!token) {
        return res.status(401).json({ msg: "No token, authorization denied" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
}



// getting the profile data of the user
router.get("/", async (req, res) => {
    try {
        const decoded = checkAuth(req, res);

        const user = await User.findById(decoded.User.id);

        return res.status(201).json(user);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
})


// edit the profile data of the user
router.put("/edit", async (req, res) => {
    try {
        const decoded = checkAuth(req, res);
        const data = req.body;

        const newuserdata = {}

        if (data.name) newuserdata.name = data.name;
        if (data.username) newuserdata.username = data.username;
        if (data.bio) newuserdata.bio = data.bio;
        if (data.address) newuserdata.address = data.address;
        if (data.gh_link) newuserdata.gh_link = data.gh_link;
        if (data.tw_link) newuserdata.tw_link = data.tw_link;
        if (data.li_link) newuserdata.li_link = data.li_link;
        if (data.pf_link) newuserdata.pf_link = data.pf_link;
        if (data.avatar) newuserdata.avatar = data.avatar;


        const user = await User.findOneAndUpdate(
            { _id: decoded.User.id },
            { $set: newuserdata },
            { new: true }
        );


        return res.status(201).json({ msg: "Profile Updated" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});



// upload or change the profile picture of the user



// router.post('/profilepic', async (req, res) => {

//     try {

//         const decoded = checkAuth(req, res);
//         const newuserdata = {}
//         if (req.body.avatar !== null) newuserdata.avatar = req.body.avatar;

//         const user = await User.findOneAndUpdate(
//             { _id: decoded.User.id },
//             { $set: newuserdata },
//             { new: true }
//         );

//         res.status(201).json({ msg: "Profile Picture Updated" });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send("Server Error");
//     }

// })


// here we are adding tech stack to the user, techstack is basically an array of strings
// we are pushing the strings to the array, with the help of $each we are able to append an array to the tech array
router.put("/addtech", async (req, res) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");

        if (!token) {
            return res.status(401).json({ msg: "No token, authorization denied" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const data = req.body;
        const
            user = await User.findOneAndUpdate(
                { _id: decoded.User.id },
                {
                    $push: {
                        "tech": { $each: data.tech }
                    },
                }
            );
        res.status(201).json({ msg: "Tech Stack Updated" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// here we are removing tech stack from the user, techstack is basically an array of strings
// we are pulling all the strings from the array that we want to remove with the help of  $pullAll command
router.put("/removetech", async (req, res) => {
    try {
        const data = req.body;
        const
            user = await User.findOneAndUpdate(
                { _id: data.id },
                {
                    $pullAll: {
                        "tech": data.tech
                    }
                }
            );
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});




module.exports = router;



