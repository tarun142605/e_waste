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
        type: mongoose.Schema.Types.Name,
        ref: 'Customer',
        required: true
    },
    CustomerContact: {
        type: mongoose.Schema.Types.Contact,
        ref: 'Customer',
        required: true
    },
    HouseNo: {
        type: mongoose.Schema.Types.HouseNo,
        ref: 'Customer',
        required: true
    },
    Street: {
        type: mongoose.Schema.Types.Street,
        ref: 'Customer',
        required: true
    },
    City: {
        type: mongoose.Schema.Types.City,
        ref: 'Customer',
        required: true
    },
    State: {
        type: mongoose.Schema.Types.State,
        ref: 'Customer',
        required: true
    },
    Pincode: {
        type: mongoose.Schema.Types.Pincode,
        ref: 'Customer',
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