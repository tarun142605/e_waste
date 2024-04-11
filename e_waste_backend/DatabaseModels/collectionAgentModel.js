import mongoose from "mongoose";
const collectionAgentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    houseNo: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    identityProofType: {
        enum: ['Aadhar', 'VoterID', 'PAN'],
        type: String,
        default: 'PAN',
        required: true
    },
    identityProofNo: {
        type: String,
        required: true
    },
    // identityProofImage: {
    //     data: Buffer,
    //     type: String,
    //     required: true
    // },
    contact: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const collectionAgent = mongoose.model('CollectionAgent', collectionAgentSchema);
export default collectionAgent;