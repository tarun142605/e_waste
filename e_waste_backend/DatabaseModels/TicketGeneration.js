import mongoose from "mongoose";
const ticketGenerationSchema = new mongoose.Schema({
    ticketNo: {
        type: String,
        required: true
    },
    customerID: {
        type: String,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    customercontact: {
        type: Number,
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
    itemID: {
        type: String,
        required: true
    },
    collectionAgentID: {
        type: String,
    },
    collectionAgentName: {
        type: String,
    },
    collectionAgentcontact: {
        type: String,
    },
    ticketStatus: {
        type: String,
        enum: ['Pending', 'Scheduled', 'Accepted', 'Rejected'],
        default: 'Pending',
        required: true
    },
    price: {
        type: Number,
    },
    pickupDate: {
        type: Date,
    }
}, {
    timestamps: true
});

const ticketGeneration = mongoose.model('TicketGeneration', ticketGenerationSchema);
export default ticketGeneration;