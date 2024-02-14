const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("./db/config");
const customerModel = require("./db/Customer");
const cors = require("cors");

// Middlewares
app.use(express.json());
app.use(cors());

// APIs for customers
app.get("/",(req, res)=>{
    res.send("hello");
})
app.post("/registerCustomer", async (req, res) => {
    let Customer = new customerModel(req.body);
    let ans = await Customer.save();
    res.send(ans);
});

app.get("/findCustomerByUsername",async (req, res) =>{
    let details =await customerModel.findOne({UserName: req.body.UserName});
    res.send(details);
})

app.listen(3000);