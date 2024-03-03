import mongoose from "mongoose";
const itemDetailsSchema = new mongoose.Schema({
    ItemName: {
        type: String,
        required: true
    },
    ItemCategory: {
        type: String,
        required: true
    },
    ItemModelNo: {
        type: String,
        required: true
    },
    ItemCondition: {
        type: String,
        enum: ['Good', 'Average', 'Worst'],
        default: 'Good',
    },
    ItemWeight: {
        type: Number,
        required: true
    },
    ItemImage: {
        type: String,
        required: true
    },
    ItemPrice: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const ItemDetails = mongoose.model('ItemDetails', itemDetailsSchema);
export default ItemDetails;