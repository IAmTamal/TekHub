const express = require("express");
const User = require("../models/UserSchema");
const Project = require("../models/ProjCommSchema");
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

        return res.status(201).json({ message: "Profile Updated" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});


// here we are adding tech stack to the user, techstack is basically an array of strings
// we are pushing the strings to the array, with the help of $each we are able to append an array to the tech array
router.put("/addtech", async (req, res) => {
    try {

        const decoded = checkAuth(req, res);
        const data = req.body;

        const
            user = await User.findOneAndUpdate(
                { _id: decoded.User.id },
                {
                    $push: {
                        "tech": { $each: data }
                    },
                }
            );
        res.status(201).json({ message: "Tech/skills updated" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// get a word from the user and delete it from the tech array

router.put("/deletetech", async (req, res) => {
    try {

        const decoded = checkAuth(req, res);
        const data = req.body;

        const user = await User.findOneAndUpdate(
            { _id: decoded.User.id },
            {
                $pull: {
                    "tech": data[0]
                },
            }
        );
        return res.status(201).json({ message: "Tech/skills updated" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});



router.post("/addproject", async (req, res) => {
    try {
        const decoded = checkAuth(req, res);
        const data = req.body;


        const user = await User.findById(decoded.User.id);

        if (user) {
            const ProjectData = Project({
                type: "project",
                name: data.name,
                user_id: decoded.User.id,
                user_name: user.name,
                desc: data.desc,
                pic: data.pic,
                gh_link: data.gh_link,
                yt_link: data.yt_link,
                pj_link: data.pj_link
            });
            await ProjectData.save()
            return res.status(201).json({ message: "Project added sucessfully" })
        }



    } catch (error) {
        res.status(500).json({ message: "Internal server error, try again later" })
    }

})





router.get("/getusersproject", async (req, res) => {
    try {

        const decoded = checkAuth(req, res);

        const projects = await Project.find({ user_id: decoded.User.id, type: "project" });
        return res.status(201).json(projects)

    } catch (error) {
        res.status(500).json({ message: "Internal server error, try again later" })
    }
})


router.post("/addcommunity", async (req, res) => {
    try {

        const decoded = checkAuth(req, res);

        const data = req.body;
        const CommData = Project({
            type: "community",
            name: data.name,
            user_id: decoded.User.id,
            desc: data.desc,
            pic: data.pic,
            gh_link: data.gh_link,
            tw_link: data.tw_link,
            yt_link: data.yt_link,
            dc_link: data.dc_link,
        });
        await CommData.save()
        return res.status(201).json({ message: "Cpmmunity added sucessfully" })

    } catch (error) {
        res.status(500).json({ message: "Internal server error, try again later" })
    }
})


router.get("/getuserscomm", async (req, res) => {
    try {

        const decoded = checkAuth(req, res);

        const communities = await Project.find({ user_id: decoded.User.id, type: "community" });
        return res.status(201).json(communities)

    } catch (error) {
        res.status(500).json({ message: "Internal server error, try again later" })
    }
})



router.delete("/deleteprojcomm/:id", async (req, res) => {
    try {
        const decoded = checkAuth(req, res);
        const id = req.params.id;


        const project = await Project.findOneAndDelete({ _id: id });

        if (!project) {
            return res.status(404).json({ message: "Project not found" })
        }

        return res.status(201).json({ message: "Project deleted sucessfully" })

    } catch (error) {
        res.status(500).json({ message: "Internal server error, try again later" })
    }
})







module.exports = router;



