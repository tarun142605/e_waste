import asyncHandler from 'express-async-handler';
import Customer from '../DatabaseModels/customerModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

var CustomerID;

// Login a customer
// GET /api/customers
// Public
const loginCustomer = asyncHandler(async (req, res) => {
    let { email, password } = req.body;
    let customer = await Customer.findOne({ email });
    if (customer) {
        if (bcrypt.compare(password, customer.password)) {
            CustomerID = customer._id;
            let accesToken = jwt.sign({
                user: {
                    FirstName: customer.FirstName,
                    LastName: customer.LastName,
                    Email: customer.Email,
                    HouseNo: customer.HouseNo,
                    Street: customer.Street,
                    City: customer.City,
                    State: customer.State,
                    Pincode: customer.Pincode,
                    Contact: customer.Contact
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

    let customerExists = await Customer.findOne({ Email: details.Email });
    if (customerExists) {
        res.status(400);
        throw new Error('Customer already exists');
    }
    let hashedPass = await bcrypt.hash(req.body.Password, 10);
    let customer = await Customer.create({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        HouseNo: req.body.HouseNo,
        Street: req.body.Street,
        City: req.body.City,
        State: req.body.State,
        Pincode: req.body.Pincode,
        Contact: req.body.Contact,
        Password: hashedPass
    });

    if (customer) {
        res.status(200).json({
            _id: customer._id,
            FirstName: customer.FirstName,
            LastName: customer.LastName,
            Email: customer.Email,
            HouseNo: customer.HouseNo,
            Street: customer.Street,
            City: customer.City,
            State: customer.State,
            Pincode: customer.Pincode,
            Contact: customer.Contact,
            Password: customer.Password
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
    let customer = await Customer.findById(CustomerID);
    if (customer) {
        res.status(200).json({
            FirstName: customer.FirstName,
            LastName: customer.LastName,
            Email: customer.Email,
            HouseNo: customer.HouseNo,
            Street: customer.Street,
            City: customer.City,
            State: customer.State,
            Pincode: customer.Pincode,
            Contact: customer.Contact
        });
    } else {
        res.status(404);
        throw new Error('Customer not found');
    }
});

// Update a customer
// PUT /api/customers
// Private

const updateCustomer = asyncHandler(async (req, res) => {
    let updatedCustomer = await Customer.findByIdAndUpdate(CustomerID, {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        HouseNo: req.body.HouseNo,
        Street: req.body.Street,
        City: req.body.City,
        State: req.body.State,
        Pincode: req.body.Pincode,
        Contact: req.body.Contact
    }, { new: true });
    res.status(200).json(updatedCustomer);
});


// Delete a customer
// DELETE /api/customers
// Private/Admin
const deleteCustomer = asyncHandler(async (req, res) => {
    let customer = await Customer.findByIdAndDelete(CustomerID);
    if (customer) {
        res.json({ message: 'Customer removed' });
    } else {
        res.status(404);
        throw new Error('Customer not found');
    }
});

export { loginCustomer, registerCustomer, getCustomer, updateCustomer, deleteCustomer };