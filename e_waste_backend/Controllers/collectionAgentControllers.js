import asyncHandler from 'express-async-handler';
import CollectionAgent from '../DatabaseModels/collectionAgentModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

var collectionAgent_ID;

// Login a collection agent
// POST /api/collectionAgents
// Public
const loginCollectionAgent = asyncHandler(async (req, res) => {
    let { email, password } = req.body;
    let collectionAgent = await CollectionAgent.findOne({ email });
    if (collectionAgent) {
        if (await bcrypt.compare(password, collectionAgent.password)) {
            collectionAgent_ID = collectionAgent._id;
            let accessToken = jwt.sign({
                user: {
                    firstName: collectionAgent.fName,
                    lastName: collectionAgent.lName,
                    email: collectionAgent.email,
                    houseNo: collectionAgent.address,
                    //street: collectionAgent.street,
                    city: collectionAgent.city,
                    //state: collectionAgent.state,
                    pincode: collectionAgent.pincode,
                    contact: collectionAgent.mobile
                }
            }, process.env.ACCSESS_TOKEN_SECRET, { expiresIn: '1d' });
            res.status(200).json({ accessToken });
        }
    }
});

// Register a new collection agent
// POST /api/collectionAgents
// Public
const registerCollectionAgent = asyncHandler(async (req, res) => {

    let collectionAgentExists = await CollectionAgent.findOne({ email: req.body.email });
    if (collectionAgentExists) {
        res.status(400);
        throw new Error('Collection Agent already exists');
    }
    let hashedPass = await bcrypt.hash(req.body.password, 10);
    let collectionAgent = await CollectionAgent.create({
        firstName: req.body.fName,
        lastName: req.body.lName,
        email: req.body.email,
        houseNo: req.body.address,
        // street: req.body.street,
        city: req.body.city,
        // state: req.body.state,
        pincode: req.body.pincode,
        contact: req.body.mobile,
        password: hashedPass
    });

    if (collectionAgent) {
        res.status(200).json({
            firstName: collectionAgent.fName,
            lastName: collectionAgent.lName,
            email: collectionAgent.email,
            houseNo: collectionAgent.address,
            // street: collectionAgent.street,
            city: collectionAgent.city,
            // state: collectionAgent.state,
            pincode: collectionAgent.pincode,
            contact: collectionAgent.mobile,
            password: collectionAgent.password
        });
    } else {
        res.status(400,"Invalid collection agent data");
    }
});


// Get collection agent details
// GET /api/collectionAgents
// Public
const getCollectionAgent = asyncHandler(async (req, res) => {
    let collectionAgent = await CollectionAgent.findById(collectionAgent_ID);
    if (collectionAgent) {
        res.status(200).json({
            firstName: collectionAgent.fName,
            lastName: collectionAgent.lName,
            email: collectionAgent.email,
            houseNo: collectionAgent.address,
            // street: collectionAgent.street,
            city: collectionAgent.city,
            // state: collectionAgent.state,
            pincode: collectionAgent.pincode,
            contact: collectionAgent.mobile
        });
    } else {
        res.status(404,"Collection Agent not found");
    }
});

// Get all collection agents
// GET/api/collectionagent
// amin
const getAllCollectionAgents = asyncHandler(async (req, res) => {
    let collectionAgents = await CollectionAgent.find();
    if (collectionAgents) {
        res.status(200).json(collectionAgents);
    } else {
        res.status(401, "Invalid request");
    }
});

// Update collection agent details
// PUT /api/collectionAgents
// Public
const updateCollectionAgent = asyncHandler(async (req, res) => {
    let updatedCollectionAgent = await CollectionAgent.findByIdAndUpdate(collectionAgent_ID, {
        firstName: req.body.fName,
        lastName: req.body.lName,
        email: req.body.email,
        houseNo: req.body.address,
        // street: req.body.street,
        city: req.body.city,
        // state: req.body.state,
        pincode: req.body.pincode,
        contact: req.body.mobile
    }, { new: true });
    res.status(200).json(updatedCollectionAgent);
});


const deleteCollectionAgent = asyncHandler(async (req, res) => {
    let collectionAgent = await CollectionAgent.findByIdAndDelete(collectionAgent_ID);
    if (collectionAgent) {
        res.json({ message: 'Collection Agent removed' });
    } else {
        res.status(404,"Collection Agent not found");
    }
});
export { loginCollectionAgent, registerCollectionAgent, getCollectionAgent, deleteCollectionAgent, updateCollectionAgent, collectionAgent_ID, getAllCollectionAgents };
