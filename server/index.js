const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
connectToMongo();
const app = express();
let port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ limit: '50mb' }));

app.get("/", (req, res) => {
    res.send("HELLO FROM HOME");
});

app.use("/auth", require("./routes/Auth"));
app.use("/profile", require("./routes/Profile"));
app.use("/data", require("./routes/Data"));
app.use('/public', express.static('public'))

app.listen(port, () => console.log("API IS RUNNING 🚀"));