const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("./db/config");
const userModel = require("./db/users");
const cors = require("cors");

// Middlewares
app.use(express.json());
app.use(cors());

// APIs
app.get("/", (req, res) => {
});

app.post("/registerUser", async (req, res) => {
    let user = new userModel(req.body);
    let ans = await user.save();
    res.send(ans);
});

app.get("/findUserByName",async (req, res) => {
    let regex =await new RegExp(req.body.username, "i");// to eleminate case sensitve search
    let user = await userModel.findOne({username: regex});
    res.send(user);
});

app.listen(3000);