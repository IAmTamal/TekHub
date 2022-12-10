const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
    },
    bio: {
        type: String,
    },
    avatar: {
        type: String,
    },
    address: {
        type: String,
    },
    gh_link: {
        type: String,
    },
    tw_link: {
        type: String,
    },
    li_link: {
        type: String,
    },
    pf_link: {
        type: String,
    },
    tech: [
        String
    ],


});

module.exports = mongoose.model("user", UserSchema);
