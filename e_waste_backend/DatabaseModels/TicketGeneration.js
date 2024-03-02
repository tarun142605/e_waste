import mongoose from "mongoose";
const ticketGenerationSchema = new mongoose.Schema({
    TicketNo: {
        type: String,
        required: true
    },
    CustomerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    CustomerName: {
        type: String,
        required: true
    },
    CustomerContact: {
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
    ItemID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ItemDetails',
        required: true
    },
    CollectionAgentID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CollectionAgent'
    },
    CollectionAgentName: {
        type: String
    },
    CollectionAgentContact: {
        type: String
    },
    TicketStatus: {
        type: String,
        enum: ['Pending', 'Scheduled', 'Accepted', 'Rejected'],
        default: 'Pending',
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    PickupDate: {
        type: Date,
        required: true
    },
    CollectionTime: {
        type: String,
        required: true
    },
    CollectionRemarks: {
        type: String
    }
}, {
    timestamps: true
});

const TicketGeneration = mongoose.model('TicketGeneration', ticketGenerationSchema);
export default TicketGeneration;