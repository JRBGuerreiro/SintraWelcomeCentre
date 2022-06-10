const express = require('express');
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const path = require("path");
const cors = require("cors");
const config = require("./config")

const { allowed_domains } = config

app.use(cors({origin: allowed_domains}))

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo"]})
})

app.use(express.static(path.join(__dirname, "..", "client", "build")));
// app.use(express.static("../client/public"));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });

app.listen(5000, () => console.log("server started on port 5000"))
