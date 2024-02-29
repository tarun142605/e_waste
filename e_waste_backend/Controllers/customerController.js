import asyncHandler from 'express-async-handler';
import Customer from '../DatabaseModels/customerModel.js';


// Login a customer
// POST /api/customers/login
// Public
const loginCustomer = asyncHandler(async (req, res) => {
    let { Email, Password } = req.body;
    let customer = await Customer.findOne({ Email });
    if (customer && (customer.Password === Password)) {
        res.status(200).json({
            _id: customer._id,
            Name: {
                FirstName: customer.Name.FirstName,
                LastName: customer.Name.LastName
            },
            Email: customer.Email,
            Address: {
                HouseNo: customer.Address.HouseNo,
                Street: customer.Address.Street,
                City: customer.Address.City,
                State: customer.Address.State,
                Pincode: customer.Address.Pincode
            },
            Contact: customer.Contact
        });
    } else {
        res.status(400);
        throw new Error('Invalid email or password');
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

    let customer = await Customer.create(req.body);

    if (customer) {
        res.status(200).json({
            _id: customer._id,
            Name: {
                FirstName: customer.Name.FirstName,
                LastName: customer.Name.LastName
            },
            Email: customer.Email,
            Address: {
                HouseNo: customer.Address.HouseNo,
                Street: customer.Address.Street,
                City: customer.Address.City,
                State: customer.Address.State,
                Pincode: customer.Address.Pincode
            },
            Contact: customer.Contact,
            Password: customer.Password
        });
    } else {
        res.status(400);
        throw new Error('Invalid customer data');
    }

});


// Get a customer
// Get /api/customers/:Email
// Public
let getCustomer = asyncHandler(async (req, res) => {
    let customer = await Customer.findOne(req.params.Email);
    if (customer) {
        res.json({
            Name: {
                FirstName: customer.Name.FirstName,
                LastName: customer.Name.LastName
            },
            Email: customer.Email,
            Address: {
                HouseNo: customer.Address.HouseNo,
                Street: customer.Address.Street,
                City: customer.Address.City,
                State: customer.Address.State,
                Pincode: customer.Address.Pincode
            },
            Contact: customer.Contact
        });
    } else {
        res.status(404);
        throw new Error('Customer not found');
    }
});

// Update a customer
// Update /api/customers/:id
// Private

const updateCustomer = asyncHandler(async (req, res) => {
    let Email = req.body.Email;
    let updatedCustomer = await Customer.findOneAndUpdate({Email}, {
        Name: {
            FirstName: req.body.FirstName,
            LastName: req.body.LastName
        },
        Email : req.body.Email,
        Address: {
            HouseNo: req.body.HouseNo,
            Street: req.body.Street,
            City: req.body.City,
            State: req.body.State,
            Pincode: req.body.Pincode
        },
        Contact : req.body.Contact
    }, {new : true});
    res.status(200).json(updatedCustomer);
});


// Delete a customer
// DELETE /api/customers/:id
// Private/Admin
const deleteCustomer = asyncHandler(async (req, res) => {
    let customer = await Customer.findOneAndDelete(req.params.Email);
    if (customer) {
        res.json({ message: 'Customer removed' });
    } else {
        res.status(404);
        throw new Error('Customer not found');
    }
});

export { loginCustomer,registerCustomer, getCustomer,updateCustomer, deleteCustomer };