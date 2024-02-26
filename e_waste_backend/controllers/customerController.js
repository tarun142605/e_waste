import asyncHandler from 'express-async-handler';
import Customer from '../DatabaseModels/customerModel.js';

//  Register a new customer
//  POST /api/customers
//  Public
const registerCustomer = asyncHandler(async (req, res) => {
    const details = Customer(req.body);
  
    const customerExists = await Customer.findOne({ Email: details.Email });
    if (customerExists) {
      res.status(400); 
      throw new Error('Customer already exists');
    }
  
    const customer = await Customer.create({
      Name: {
        FirstName: details.Name.FirstName,
        LastName: details.Name.LastName
      },
      Email: details.Email,
      Address: {
         HouseNo: details.Address.HouseNo,
         Street: details.Address.Street,
         City: details.Address.City,
         State: details.Address.State,
         Pincode: details.Address.Pincode
      },
      Contact: details.Contact,
      UserName: details.UserName,
      Password: details.Password
    });
  
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
        UserName: customer.UserName,
        Password: customer.Password
      });
    } else {
      res.status(400);
      throw new Error('Invalid customer data');
    }
  });

//  Fetch all customers
//  GET /api/customers
//  Public
const getCustomers = asyncHandler(async (req, res) => {
  const customers = await Customer.find({Email: req.body.Email});
  res.json(customers);
});
