const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("./db/config");
const customerModel = require("./db/Customer");
const cors = require("cors");

// Middlewares
app.use(express.json());
app.use(cors());

// APIs
app.get("/", (req, res) => {
});

app.post("/registerCustomer", async (req, res) => {
    let customer = new customerModel(req.body);
    let ans = await customer.save();
    res.send(ans);
});

app.get("/findUserByName",async (req, res) => {
    let regex =await new RegExp(req.body.username, "i");// to eleminate case sensitve search
    let user = await userModel.findOne({username: regex});
    res.send(user);
});

app.listen(3000);