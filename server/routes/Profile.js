const express = require("express");
const User = require("../models/UserSchema");
const router = express.Router();
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");


router.put("/edituser/:id", async (req, res) => {
    try {
        const data = req.body;
        const user = await User.findOneAndUpdate(
            { _id: req.params.id },
            {
                name: data.name,
                address: data.address,
                gh_link: data.gh_link,
                tw_link: data.tw_link,
                li_link: data.li_link,
                pf_link: data.pf_link,
            }
        );
        res.json(data.gh_link);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});


// here we are adding tech stack to the user, techstack is basically an array of strings
// we are pushing the strings to the array, with the help of $each we are able to append an array to the tech_stack array
router.put("/addtech/:id", async (req, res) => {
    try {
        const data = req.body;
        const
            user = await User.findOneAndUpdate(
                { _id: req.params.id },
                {
                    $push: {
                        "tech_stack": { $each: data.tech_stack }
                    },
                }
            );
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// here we are removing tech stack from the user, techstack is basically an array of strings
// we are pulling all the strings from the array that we want to remove with the help of  $pullAll command
router.put("/removetech/:id", async (req, res) => {
    try {
        const data = req.body;
        const
            user = await User.findOneAndUpdate(
                { _id: req.params.id },
                {
                    $pullAll: {
                        "tech_stack": data.tech_stack
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



