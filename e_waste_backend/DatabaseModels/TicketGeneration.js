import mongoose from "mongoose";
const ticketGenerationSchema = new mongoose.Schema({
    ticketNo: {
        type: String,
        required: true
    },
    customerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    customerName: {
        type: mongoose.Schema.Types.Name,
        ref: 'Customer',
        required: true
    },
    customercontact: {
        type: mongoose.Schema.Types.contact,
        ref: 'Customer',
        required: true
    },
    houseNo: {
        type: mongoose.Schema.Types.houseNo,
        ref: 'Customer',
        required: true
    },
    street: {
        type: mongoose.Schema.Types.street,
        ref: 'Customer',
        required: true
    },
    city: {
        type: mongoose.Schema.Types.city,
        ref: 'Customer',
        required: true
    },
    state: {
        type: mongoose.Schema.Types.state,
        ref: 'Customer',
        required: true
    },
    pincode: {
        type: mongoose.Schema.Types.pincode,
        ref: 'Customer',
        required: true
    },
    itemID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ItemDetails',
        required: true
    },
    itemImage: {
        data: Buffer,
        type: String,
        required: true
    },
    collectionAgentID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CollectionAgent'
    },
    collectionAgentName: {
        type: String,
        required: true
    },
    collectionAgentcontact: {
        type: String,
        required: true
    },
    ticketStatus: {
        type: String,
        enum: ['Pending', 'Scheduled', 'Accepted', 'Rejected'],
        default: 'Pending',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    pickupDate: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

const ticketGeneration = mongoose.model('TicketGeneration', ticketGenerationSchema);
export default ticketGeneration;