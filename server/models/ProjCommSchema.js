const mongoose = require("mongoose");

const ProjCommSchema = mongoose.Schema({
    name: {
        type: String,
    },
    user_id:
    {
        type: String,
    },
    desc: {
        type: String,
    },
    pic: {
        type: String,
    },
    gh_link: {
        type: String,
    },
    tw_link: {
        type: String,
    },
    yt_link: {
        type: String,
    },
    dc_link: {
        type: String,
    },
    pj_link: {
        type: String,
    }


});

module.exports = mongoose.model("projcomm", ProjCommSchema);
