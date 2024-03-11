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
    ItemCondition: {
        type: String,
        required: true
    },
    ItemWeight: {
        type: Number,
        required: true
    },
    ItemImage: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const ItemDetails = mongoose.model('ItemDetails', itemDetailsSchema);
export default ItemDetails;