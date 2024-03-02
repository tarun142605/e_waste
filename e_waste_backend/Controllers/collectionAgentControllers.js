import asyncHandler from 'express-async-handler';
import CollectionAgent from '../DatabaseModels/collectionAgentModel.js';

var collectionAgentID;

// Login a collection agent
// POST /api/collectionAgents
// Public
const loginCollectionAgent = asyncHandler(async (req, res) => {
    let { Email, Password } = req.body;
    let collectionAgent = await CollectionAgent.findOne({ Email });
    if (collectionAgent && (collectionAgent.Password === Password)) {
        collectionAgentID = collectionAgent._id;
        res.status(200).json({
            FirstName: collectionAgent.FirstName,
            LastName: collectionAgent.LastName,
            Email: collectionAgent.Email,
            HouseNo: collectionAgent.HouseNo,
            Street: collectionAgent.Street,
            City: collectionAgent.City,
            State: collectionAgent.State,
            Pincode: collectionAgent.Pincode,
            IdentityProofType: collectionAgent.IdentityProofType,
            IdentityProofNo: collectionAgent.IdentityProofNo,
            //IdentityProofImage: collectionAgent.IdentityProof.IdentityProofImage
            Contact: collectionAgent.Contact
        });
    } else {
        res.status(400);
        throw new Error('Invalid email or password');
    }
});

// Register a new collection agent
// POST /api/collectionAgents
// Public
const registerCollectionAgent = asyncHandler(async (req, res) => {
    let details = CollectionAgent(req.body);

    let collectionAgentExists = await CollectionAgent.findOne({ Email: details.Email });
    if (collectionAgentExists) {
        res.status(400);
        throw new Error('Collection Agent already exists');
    }

    let collectionAgent = await CollectionAgent.create(req.body);

    if (collectionAgent) {
        res.status(200).json({
            FirstName: collectionAgent.FirstName,
            LastName: collectionAgent.LastName,
            Email: collectionAgent.Email,
            HouseNo: collectionAgent.HouseNo,
            Street: collectionAgent.Street,
            City: collectionAgent.City,
            State: collectionAgent.State,
            Pincode: collectionAgent.Pincode,
            IdentityProofType: collectionAgent.IdentityProofType,
            IdentityProofNo: collectionAgent.IdentityProofNo,
            //IdentityProofImage: collectionAgent.IdentityProof.IdentityProofImage
            Contact: collectionAgent.Contact,
            Password: collectionAgent.Password
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
            FirstName: collectionAgent.FirstName,
            LastName: collectionAgent.LastName,
            Email: collectionAgent.Email,
            HouseNo: collectionAgent.HouseNo,
            Street: collectionAgent.Street,
            City: collectionAgent.City,
            State: collectionAgent.State,
            Pincode: collectionAgent.Pincode,
            IdentityProofType: collectionAgent.IdentityProofType,
            IdentityProofNo: collectionAgent.IdentityProofNo,
            //IdentityProofImage: collectionAgent.IdentityProof.IdentityProofImage
            Contact: collectionAgent.Contact
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
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        HouseNo: req.body.HouseNo,
        Street: req.body.Street,
        City: req.body.City,
        State: req.body.State,
        Pincode: req.body.Pincode,
        IdentityProofType: req.body.IdentityProofType,
        IdentityProofNo: req.body.IdentityProofNo,
        //IdentityProofImage: req.body.IdentityProofImage
        Contact: req.body.Contact,
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
