import asyncHandler from 'express-async-handler';
import Customer from '../database/Customer.js';
//import express from 'express';

// Auth user & get token
// POST /api/customers/login
// Public
const loginCustomer = asyncHandler(async (req, res) => {
  const details = req.body;

  const customer = await Customer.findOne({ UserName: details.UserName});
  if(customer){
    if (customer && (await customer.matchPassword(Password))) {
    res.json({
      _id: customer._id,
      Name: customer.Name,
      Email: customer.Email,
      Address: {
            HouseNo: customer.HouseNo,
            Street: customer.Street,
            City: customer.City,
            State: customer.State,
            Pincode: customer.Pincode
      },
      Contact: customer.Contact,
      UserName: customer.UserName,
      Password: customer.Password
    });
    } else {
    res.status(401);
    throw new Error('Invalid username or password');
    }}
    else{
        res.status(401);
        throw new Error("User doesn't exist.... Please register first.");
    }
});


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
    Name: details.Name,
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
      Name: customer.Name,
      Email: customer.Email,
      Address: {
            HouseNo: customer.HouseNo,
            Street: customer.Street,
            City: customer.City,
            State: customer.State,
            Pincode: customer.Pincode
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

// Get user profile
// GET /api/users/profile
// Private
const getCustomerProfile = asyncHandler(async (req, res) => {
    
    const customer = await Customer.findById(req.customer._id)

    if(customer){
        res.json({
            _id: customer._id,
            Name: customer.Name,
            Email: customer.Email,
            Address: {
                HouseNo: customer.HouseNo,
                Street: customer.Street,
                City: customer.City,
                State: customer.State,
                Pincode: customer.Pincode
            },
            Contact: customer.Contact,
            UserName: customer.UserName,
            Password: customer.Password 
    })
    }else{
        res.status(404)
        throw new Error('User not found')
    }    
})

// Update user profile
// PUT /api/users/profile
// Private
const updateCustomerProfile = asyncHandler(async (req, res) => {
    
    const customer = await Customer.findById(req.customer._id)

    if(customer){
        customer.name = req.body.name || user.name
        customer.email = req.body.email || user.email
        if(req.body.password){
            customer.password = req.body.password || customer.password
        }

        const updatedUser = await customer.save()
            res.json({
            _id: updatedUser._id,
            Name: updatedUser.name,
            Email: updatedUser.email,
            Address: {
                HouseNo: updatedUser.HouseNo,
                Street: updatedUser.Street,
                City: updatedUser.City,
                State: updatedUser.State,
                Pincode: updatedUser.Pincode
            },
            Contact: updatedUser.Contact,
            UserName: updatedUser.username,
            Password: updatedUser.password
        })

    }else{
        res.status(404)
        throw new Error('User not found')
    }
})

//  Fetch all customers
//  GET /api/customers
//  Public
const getCustomers = asyncHandler(async (req, res) => {
  const customers = await Customer.find({});
  res.json(customers);
});


// Fetch single customer
// GET /api/customers/:id
// Public
const getCustomerById = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.params.id).select('-Password');

  if (customer) {
    res.json(customer);
  } else {
    res.status(404);
    throw new Error('Customer not found');
  }
});

// Update a customer
// PUT /api/customers/:id
// Public
const updateCustomer = asyncHandler(async (req, res) => {
  
  const customer = await Customer.findById(req.params.id);

  if (customer) {
    customer.Name = req.body.Name || customer.Name;
    customer.Email = req.body.Email || customer.Email;
    customer.HouseNo = req.body.Address.HouseNo || customer.HouseNo;
    customer.Street = req.body.Address.Street || customer.Street;
    customer.City = req.body.Address.City || customer.City;
    customer.State = req.body.Address.State || customer.State;
    customer.Pincode = req.body.Address.Pincode || customer.Pincode;
    customer.Contact = req.body.Contact || customer.Contact;
    customer.UserName = req.body.UserName || customer.UserName;
    customer.Password = req.body.Password || customer.Password;

    const updatedCustomer = await customer.save();
    res.json({
      _id: updatedCustomer._id,
      Name: updatedCustomer.Name,
      Email: updatedCustomer.Email,
      Address: {
            HouseNo: updatedCustomer.HouseNo,
            Street: updatedCustomer.Street,
            City: updatedCustomer.City,
            State: updatedCustomer.State,
            Pincode: updatedCustomer.Pincode
      },
      Contact: updatedCustomer.Contact,
      UserName: updatedCustomer.UserName,
      Password: updatedCustomer.Password
    });
  } else {
    res.status(404);
    throw new Error('Customer not found');
  }
});

// Delete a customer
// DELETE /api/customers/:id
// Public
const deleteCustomer = asyncHandler(async (req, res) => {
    const details = req.body;
  const customer = await Customer.findById({UserName: details.UserName});

  if (customer) {
    await customer.remove();
    res.json({ message: 'Customer removed' });
  } else {
    res.status(404);
    throw new Error('Customer not found');
  }
});

export{ loginCustomer,registerCustomer,getCustomerProfile,updateCustomerProfile,getCustomers,getCustomerById,updateCustomer,deleteCustomer };
    