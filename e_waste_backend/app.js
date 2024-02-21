import express, { json } from "express";
const app = express();
import "./db/config.js";
import customerModel from "./db/Customer.js";
import cors from "cors";

// Middlewares
app.use(json());
app.use(cors());

// APIs for customers
app.post("/registerCustomer", async (req, res) => {
    let Customer = new customerModel(req.body);
    let ans = await Customer.save();
    res.send(ans);
});

app.get("/findCustomerByUsername",async (req, res) =>{
    let details =await findOne({UserName: req.body.UserName});
    res.send(details);
})

app.listen(3000);