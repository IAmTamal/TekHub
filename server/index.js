const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
connectToMongo();
const app = express();
let port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("HELLO FROM HOME");
});

app.use("/auth", require("./routes/Auth"));
app.use("/profile", require("./routes/Profile"));

app.listen(port, () => console.log("API IS RUNNING 🚀"));