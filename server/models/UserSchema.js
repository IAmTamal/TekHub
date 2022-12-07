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
    tech_stack: [
        String
    ],

});

module.exports = mongoose.model("user", UserSchema);
