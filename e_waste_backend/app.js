const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("./db/config");
const users = require("./db/users");
const cors = require("cors");

// Middlewares
app.use(express.json());
app.use(cors());

// APIs
app.get("/", (req, res) => {
});

app.post("/registerUser", async (req, res) => {
    let user = new users(req.body);
    let ans = await user.save();
    res.send(ans);
})

app.listen(3000);