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
<<<<<<< HEAD
        default: 'Good',
=======
        default: 'Good'
>>>>>>> 65d68b5e1c5fa8b29ba669b95198e91e70492090
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