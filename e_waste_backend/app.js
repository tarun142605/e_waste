const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("./db/config");
const customerModel = require("./db/Customer");
const cors = require("cors");

// Middlewares
app.use(express.json());
app.use(cors());

// APIs for customer

app.post("/registerCustomer", async (req, res) => {
    let customer = new customerModel(req.body);
    let ans = await customer.cust();
    res.send(ans);
});

app.listen(3000);