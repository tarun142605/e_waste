import asyncHandler from 'express-async-handler';
import CollectionAgent from '../DatabaseModels/collectionAgentModel.js';

// Register a new collection agent
// POST /api/collectionAgents
// Public
const registerCollectionAgent = asyncHandler(async (req, res) => {
  const details = CollectionAgent(req.body);

  const collectionAgentExists = await CollectionAgent.findOne({ Email: details.Email });
    if (collectionAgentExists) {
        res.status(400); 
        throw new Error('Collection Agent already exists');
    }

    const collectionAgent = await CollectionAgent.create(req.body);
    
    if (collectionAgent) {
        res.status(200).json({
            _id: collectionAgent._id,
            Name: {
                FirstName: collectionAgent.Name.FirstName,
                LastName: collectionAgent.Name.LastName
            },
            Email: collectionAgent.Email,
            Address: {
                HouseNo: collectionAgent.Address.HouseNo,
                Street: collectionAgent.Address.Street,
                City: collectionAgent.Address.City,
                State: collectionAgent.Address.State,
                Pincode: collectionAgent.Address.Pincode
            },
            IdentityProof: {
                IdentityProofType: collectionAgent.IdentityProof.IdentityProofType,
                IdentityProofNo: collectionAgent.IdentityProof.IdentityProofNo,
                IdentityProofImage: collectionAgent.IdentityProof.IdentityProofImage
            },
            Contact: collectionAgent.Contact,
            Password: collectionAgent.Password
        });
    } else {
        res.status(400);
        throw new Error('Invalid collection agent data');
    }
});

const getCollectionAgent = asyncHandler(async (req, res) => {
    const collectionAgent = await CollectionAgent.findById({Email : req.body.Email});
    if (collectionAgent) {
        res.json(collectionAgent);
    } else {
        res.status(404);
        throw new Error('Collection Agent not found');
    }
});

const updateCollectionAgent = asyncHandler(async (req, res) => {
    const collectionAgent = await CollectionAgent.findOneAndUpdate({});
});

const deleteCollectionAgent = asyncHandler(async (req, res) => {
    const collectionAgent = await CollectionAgent.findOneAndDelete({Email : req.body.Email});
    if (collectionAgent) {
        res.json({ message: 'Collection Agent removed' });
    } else {
        res.status(404);
        throw new Error('Collection Agent not found');
    }
});
export { registerCollectionAgent,getCollectionAgent,updateCollectionAgent,deleteCollectionAgent };
