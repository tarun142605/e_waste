import asyncHandler from 'express-async-handler';
import CollectionAgent from '../DatabaseModels/collectionAgentModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

var collectionAgentID;

// Login a collection agent
// POST /api/collectionAgents
// Public
const loginCollectionAgent = asyncHandler(async (req, res) => {
    let { email, password } = req.body;
    let collectionAgent = await CollectionAgent.findOne({ email });
    if (collectionAgent) {
        if (await bcrypt.compare(password, collectionAgent.password)) {
            collectionAgentID = collectionAgent._id;
            let accessToken = jwt.sign({
                user: {
                    firstName: collectionAgent.firstName,
                    lastName: collectionAgent.lastName,
                    email: collectionAgent.email,
                    houseNo: collectionAgent.houseNo,
                    street: collectionAgent.street,
                    city: collectionAgent.city,
                    state: collectionAgent.state,
                    pincode: collectionAgent.pincode,
                    IdentityProofType: collectionAgent.IdentityProofType,
                    IdentityProofNo: collectionAgent.IdentityProofNo,
                    //IdentityProofImage: collectionAgent.IdentityProof.IdentityProofImage
                    contact: collectionAgent.contact
                }
            }, process.env.ACCSESS_TOKEN_SECRET, { expiresIn: '1d' });
            res.status(200).json(accessToken);
        }
    }
});

// Register a new collection agent
// POST /api/collectionAgents
// Public
const registerCollectionAgent = asyncHandler(async (req, res) => {
    let details = CollectionAgent(req.body);

    let collectionAgentExists = await CollectionAgent.findOne({ email: details.email });
    if (collectionAgentExists) {
        res.status(400);
        throw new Error('Collection Agent already exists');
    }
    let hashedPass = await bcrypt.hash(req.body.password, 10);
    let collectionAgent = await CollectionAgent.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        houseNo: req.body.houseNo,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        pincode: req.body.pincode,
        IdentityProofType: req.body.IdentityProofType,
        IdentityProofNo: req.body.IdentityProofNo,
        //IdentityProofImage: collectionAgent.IdentityProof.IdentityProofImage
        contact: req.body.contact,
        password: hashedPass
    });

    if (collectionAgent) {
        res.status(200).json({
            firstName: collectionAgent.firstName,
            lastName: collectionAgent.lastName,
            email: collectionAgent.email,
            houseNo: collectionAgent.houseNo,
            street: collectionAgent.street,
            city: collectionAgent.city,
            state: collectionAgent.state,
            pincode: collectionAgent.pincode,
            IdentityProofType: collectionAgent.IdentityProofType,
            IdentityProofNo: collectionAgent.IdentityProofNo,
            //IdentityProofImage: collectionAgent.IdentityProof.IdentityProofImage
            contact: collectionAgent.contact,
            password: collectionAgent.password
        });
    } else {
        res.status(400);
        throw new Error('Invalid collection agent data');
    }
});


// Get collection agent details
// GET /api/collectionAgents
// Public
const getCollectionAgent = asyncHandler(async (req, res) => {
    let collectionAgent = await CollectionAgent.findById(collectionAgentID);
    if (collectionAgent) {
        res.status(200).json({
            firstName: collectionAgent.firstName,
            lastName: collectionAgent.lastName,
            email: collectionAgent.email,
            houseNo: collectionAgent.houseNo,
            street: collectionAgent.street,
            city: collectionAgent.city,
            state: collectionAgent.state,
            pincode: collectionAgent.pincode,
            IdentityProofType: collectionAgent.IdentityProofType,
            IdentityProofNo: collectionAgent.IdentityProofNo,
            //IdentityProofImage: collectionAgent.IdentityProof.IdentityProofImage
            contact: collectionAgent.contact
        });
    } else {
        res.status(404);
        throw new Error('Collection Agent not found');
    }
});

// Update collection agent details
// PUT /api/collectionAgents
// Public
const updateCollectionAgent = asyncHandler(async (req, res) => {
    let updatedCollectionAgent = await CollectionAgent.findByIdAndUpdate(collectionAgentID, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        houseNo: req.body.houseNo,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        pincode: req.body.pincode,
        IdentityProofType: req.body.IdentityProofType,
        IdentityProofNo: req.body.IdentityProofNo,
        //IdentityProofImage: req.body.IdentityProofImage
        contact: req.body.contact,
    }, { new: true });
    res.status(200).json(updatedCollectionAgent);
});


const deleteCollectionAgent = asyncHandler(async (req, res) => {
    let collectionAgent = await CollectionAgent.findByIdAndDelete(collectionAgentID);
    if (collectionAgent) {
        res.json({ message: 'Collection Agent removed' });
    } else {
        res.status(404);
        throw new Error('Collection Agent not found');
    }
});
export { loginCollectionAgent, registerCollectionAgent, getCollectionAgent, deleteCollectionAgent, updateCollectionAgent };
