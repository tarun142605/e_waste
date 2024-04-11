import asyncHandler from 'express-async-handler';
import Customer from '../DatabaseModels/customerModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

var customer_ID;

// Login a customer
// GET /api/customers
// Public
const loginCustomer = asyncHandler(async (req, res) => {
    let { email, password } = req.body;
    let customer = await Customer.findOne({ email });
    if (customer) {
        if (bcrypt.compare(password, customer.password)) {
            customer_ID = customer._id;
            let accesToken = jwt.sign({
                user: {
                    firstName: customer.firstName,
                    lastName: customer.lastName,
                    email: customer.email,
                    houseNo: customer.houseNo,
                    street: customer.street,
                    city: customer.city,
                    state: customer.state,
                    pincode: customer.pincode,
                    contact: customer.contact
                }
            }, process.env.ACCSESS_TOKEN_SECRET, { expiresIn: '1d' });
            res.status(200).json({ accesToken });
        } else {
            res.status(400);
            throw new Error('Invalid email or password');
        }
    }
});


// Register a new customer
// POST /api/customers
// Public
const registerCustomer = asyncHandler(async (req, res) => {
    let details = Customer(req.body);
    console.log(details);

    let customerExists = await Customer.findOne({ email: details.email });
    if (customerExists) {
        res.status(400);
        throw new Error('Customer already exists');
    }
    let hashedPass = await bcrypt.hash(req.body.password, 10);
    let customer = await Customer.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        houseNo: req.body.houseNo,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        pincode: req.body.pincode,
        contact: req.body.contact,
        password: hashedPass
    });

    if (customer) {
        res.status(200).json({
            _id: customer._id,
            firstName: customer.firstName,
            lastName: customer.lastName,
            email: customer.email,
            houseNo: customer.houseNo,
            street: customer.street,
            city: customer.city,
            state: customer.state,
            pincode: customer.pincode,
            contact: customer.contact,
            password: customer.password
        });
    } else {
        res.status(400);
        throw new Error('Invalid customer data');
    }

});


// Get a customer
// Get /api/customers
// Private
let getCustomer = asyncHandler(async (req, res) => {
    let customer = await Customer.findById(customer_ID);
    if (customer) {
        res.status(200).json({
            firstName: customer.firstName,
            lastName: customer.lastName,
            email: customer.email,
            houseNo: customer.houseNo,
            street: customer.street,
            city: customer.city,
            state: customer.state,
            pincode: customer.pincode,
            contact: customer.contact
        });
    } else {
        res.status(404);
        throw new Error('Customer not found');
    }
});

// Get all customers
// GET/api/customers
// admin
const getAllCustomers = asyncHandler(async (req, res) => {
    let customers = await Customer.find();
    if(customers){
        res.status(200).json(customers);
    }else{
        res.status(401);
        throw new Error("invalid request");
    }
});

// Update a customer
// PUT /api/customers
// Private

const updateCustomer = asyncHandler(async (req, res) => {
    let updatedCustomer = await Customer.findByIdAndUpdate(customerID, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        houseNo: req.body.houseNo,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        pincode: req.body.pincode,
        contact: req.body.contact
    }, { new: true });
    res.status(200).json(updatedCustomer);
});


// Delete a customer
// DELETE /api/customers
// Private/Admin
const deleteCustomer = asyncHandler(async (req, res) => {
    let customer = await Customer.findByIdAndDelete(customerID);
    if (customer) {
        res.json({ message: 'Customer removed' });
    } else {
        res.status(404);
        throw new Error('Customer not found');
    }
});

export { loginCustomer, registerCustomer, getCustomer, updateCustomer, deleteCustomer, getAllCustomers, customer_ID };
