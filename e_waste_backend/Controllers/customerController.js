import asyncHandler from 'express-async-handler';
import Customer from '../DatabaseModels/customerModel.js';

// Register a new customer
// POST /api/customers
// Public
const registerCustomer = asyncHandler(async (req, res) => {
    const details = Customer(req.body);

    const customerExists = await Customer.findOne({ Email: details.Email });
    if (customerExists) {
        res.status(400);
        throw new Error('Customer already exists');
    }

    const customer = await Customer.create(req.body);

    if (customer) {
        res.status(200).json(customer);
    } else {
        res.status(400);
        throw new Error('Invalid customer data');
    }

});

const getCustomer = asyncHandler(async (req, res) => {
    const customer = await Customer.findById(req.params.id);
    if (customer) {
        res.json(customer);
    } else {
        res.status(404);
        throw new Error('Customer not found');
    }
});

const updateCustomer = asyncHandler(async (req, res) => {
    const customer = await Customer.findOneAndUpdate({});
});

// Delete a customer
// DELETE /api/customers/:id
// Private/Admin
const deleteCustomer = asyncHandler(async (req, res) => {
    const customer = await Customer.findOneAndDelete({ Email: req.body.Email });
    if (customer) {
        res.json({ message: 'Customer removed' });
    } else {
        res.status(404);
        throw new Error('Customer not found');
    }
});

export { registerCustomer, getCustomer, deleteCustomer };