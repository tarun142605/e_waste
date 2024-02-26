import asyncHandler from 'express-async-handler';
import CollectionAgent from '../database/CollectionAgent.js.js';
import collectionAgent from '../database/CollectionAgent.js';
import collectionAgent from '../database/CollectionAgent.js';
//import express from 'express';

// Auth user & get token
// POST /api/customers/login
// Public
const loginCollectionAgent = asyncHandler(async (req, res) => {
  const details = req.body;

  const collectionAgent = await CollectionAgent.findOne({ UserName: details.UserName});
  if(collectionAgent){
    if (collectionAgent && (await collectionAgent.matchPassword(Password))) {
    res.json({
      _id: collectionAgent._id,
      Name: collectionAgent.Name,
      Email: collectionAgent.Email,
      Address: {
            HouseNo: collectionAgent.HouseNo,
            Street: collectionAgent.Street,
            City: collectionAgent.City,
            State: collectionAgent.State,
            Pincode: collectionAgent.Pincode
      },
      Contact: collectionAgent.Contact,
      UserName: collectionAgent.UserName,
      Password: collectionAgent.Password
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
const registerCollectionAgent = asyncHandler(async (req, res) => {
  const details = CollectionAgent(req.body);

  const customerExists = await CollectionAgent.findOne({ Email: details.Email });
  if (customerExists) {
    res.status(400); 
    throw new Error('Collection Agent already exists');
  }

  const collectionAgent = await CollectionAgent.create({
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

  if (collectionAgent) {
    res.status(201).json({
      _id: collectionAgent._id,
      Name: collectionAgent.Name,
      Email: collectionAgent.Email,
      Address: {
            HouseNo: collectionAgent.HouseNo,
            Street: collectionAgent.Street,
            City: collectionAgent.City,
            State: collectionAgent.State,
            Pincode: collectionAgent.Pincode
      },
      Contact: collectionAgent.Contact,
      UserName: collectionAgent.UserName,
      Password: collectionAgent.Password
    });
  } else {
    res.status(400);
    throw new Error('Invalid customer data');
  }
});

// Get user profile
// GET /api/users/profile
// Private
const getCollectionAgentProfile = asyncHandler(async (req, res) => {
    
    const collectionAgent = await CollectionAgent.findById(req.customer._id)

    if(collectionAgent){
        res.json({
            _id: collectionAgent._id,
            Name: collectionAgent.Name,
            Email: collectionAgent.Email,
            Address: {
                HouseNo: collectionAgent.HouseNo,
                Street: collectionAgent.Street,
                City: collectionAgent.City,
                State: collectionAgent.State,
                Pincode: collectionAgent.Pincode
            },
            Contact: collectionAgent.Contact,
            UserName: collectionAgent.UserName,
            Password: collectionAgent.Password 
    })
    }else{
        res.status(404)
        throw new Error('User not found')
    }    
})

// Update user profile
// PUT /api/users/profile
// Private
const updateCollectionAgentProfile = asyncHandler(async (req, res) => {
    
    const collectionAgent = await collectionAgent.findById(req.customer._id)

    if(collectionAgent){
        collectionAgent.name = req.body.name || collectionAgent.name
        collectionAgent.email = req.body.email || collectionAgent.email
        if(req.body.password){
            collectionAgent.password = req.body.password || collectionAgent.password
        }

        const updatedCollectionAgent = await CollectionAgent.save()
            res.json({
            _id: updatedCollectionAgent._id,
            Name: updatedCollectionAgent.name,
            Email: updatedCollectionAgent.email,
            Address: {
                HouseNo: updatedCollectionAgent.HouseNo,
                Street: updatedCollectionAgent.Street,
                City: updatedCollectionAgent.City,
                State: updatedCollectionAgent.State,
                Pincode: updatedCollectionAgent.Pincode
            },
            Contact: updatedCollectionAgent.Contact,
            UserName: updatedCollectionAgent.username,
            Password: updatedCollectionAgent.password
        })

    }else{
        res.status(404)
        throw new Error('User not found')
    }
})

//  Fetch all customers
//  GET /api/customers
//  Public
const getCollectionAgent = asyncHandler(async (req, res) => {
  const collectionAgent = await CollectionAgent.find({});
  res.json(collectionAgent);
});


// Fetch single customer
// GET /api/customers/:id
// Public
const getCollectionAgentById = asyncHandler(async (req, res) => {
  const collectionAgent = await CollectionAgent.findById(req.params.id).select('-Password');

  if (collectionAgent) {
    res.json(collectionAgent);
  } else {
    res.status(404);
    throw new Error('Collection Agent not found');
  }
});

// Update a customer
// PUT /api/customers/:id
// Public
const updateCollectionAgent = asyncHandler(async (req, res) => {
  
  const collectionAgent = await CollectionAgent.findById(req.params.id);

  if (collectionAgent) {
    collectionAgent.Name = req.body.Name || collectionAgent.Name;
    collectionAgent.Email = req.body.Email || collectionAgent.Email;
    collectionAgent.HouseNo = req.body.Address.HouseNo || collectionAgent.HouseNo;
    collectionAgent.Street = req.body.Address.Street || collectionAgent.Street;
    collectionAgent.City = req.body.Address.City || collectionAgent.City;
    collectionAgent.State = req.body.Address.State || customer.State;
    collectionAgent.Pincode = req.body.Address.Pincode || collectionAgent.Pincode;
    collectionAgent.Contact = req.body.Contact || collectionAgent.Contact;
    collectionAgent.UserName = req.body.UserName || collectionAgent.UserName;
    collectionAgent.Password = req.body.Password || collectionAgent.Password;

    const updatedCollectionAgent = await collectionAgent.save();
    res.json({
      _id: updatedCollectionAgent._id,
      Name: updatedCollectionAgent.Name,
      Email: updatedCollectionAgent.Email,
      Address: {
            HouseNo: updatedCollectionAgent.HouseNo,
            Street: updatedCollectionAgent.Street,
            City: updatedCollectionAgent.City,
            State: updatedCollectionAgent.State,
            Pincode: updatedCollectionAgent.Pincode
      },
      Contact: updatedCollectionAgent.Contact,
      UserName: updatedCollectionAgent.UserName,
      Password: updatedCollectionAgent.Password
    });
  } else {
    res.status(404);
    throw new Error('Collection Agent not found');
  }
});

// Delete a customer
// DELETE /api/customers/:id
// Public
const deleteCollectionAgent = asyncHandler(async (req, res) => {
    const details = req.body;
  const collectionAgent = await CollectionAgent.findById({UserName: details.UserName});

  if (collectionAgent) {
    await collectionAgent.remove();
    res.json({ message: 'Collection Agent removed' });
  } else {
    res.status(404);
    throw new Error('Collection Agent not found');
  }
});

export { loginCollectionAgent,registerCollectionAgent,getCollectionAgentProfile,updateCollectionAgentProfile,getCollectionAgent,getCollectionAgentById,updateCollectionAgent,deleteCollectionAgent };