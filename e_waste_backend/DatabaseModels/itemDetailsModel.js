import mongoose from "mongoose";
const itemDetailsSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    itemCategory: {
        type: String,
        required: true
    },
    itemDescription: {
        type: String,
        required: true,
        maxlength: 2000
    },
    itemCondition: {
        type: String,
        enum: ['Good', 'Average', 'Worst'],
        default: 'Good',
        required: true
    },
    itemWeight: {
        type: Number,
        required: true
    },
    itemImage: {
        type: String,
        required: true
    },
    itemPrice: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const itemDetails = mongoose.model('ItemDetails', itemDetailsSchema);
export default itemDetails;