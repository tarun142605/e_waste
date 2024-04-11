import mongoose from "mongoose";
const collectionAgentSchema = new mongoose.Schema({
    firstName: {
        type: String,

    },
    lastName: {
        type: String,

    },
    email: {
        type: String,

    },
    houseNo: {
        type: String,

    },
    city: {
        type: String,

    },
    pincode: {
        type: String,

    },
    contact: {
        type: Number,

    },
    password: {
        type: String,

    }
}, {
    timestamps: true
});

const collectionAgent = mongoose.model('CollectionAgent', collectionAgentSchema);
export default collectionAgent;