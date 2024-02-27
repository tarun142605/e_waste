import express from 'express';
const router = express.Router();
import Customer from '../DatabaseModels/customerModel.js';

// API for register customer
router.post('/register', async (req, res) => {
    let createdCustomer = await Customer.create(req.body);
    res.send(createdCustomer);
});

//  API for get all customers
router.get('/getCustomerByContact', async (req, res) => {
    let customer = await Customer.findOne({ Contact: req.body.Contact });
    res.send(customer);
});

//  API for update customer details

export default router;