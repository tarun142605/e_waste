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
        res.status(201).json({
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

export { registerCustomer };
