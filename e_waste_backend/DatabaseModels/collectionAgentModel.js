import mongoose from "mongoose";
const collectionAgentSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    HouseNo: {
        type: String,
        required: true
    },
    Street: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },
    State: {
        type: String,
        required: true
    },
    Pincode: {
        type: String,
        required: true
    },
    IdentityProofType: {
        enum: ['Aadhar', 'VoterID', 'PAN'],
        type: String,
        default: 'PAN',
        required: true
    },
    IdentityProofNo: {
        type: String,
        required: true
    },
    IdentityProofImage: {
        data: Buffer,
        type: String,
        required: true
    },
    Contact: {
        type: String,
        min: 10,
        max: 10,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const CollectionAgent = mongoose.model('CollectionAgent', collectionAgentSchema);
export default CollectionAgent;