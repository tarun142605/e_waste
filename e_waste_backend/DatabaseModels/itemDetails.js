import mongoose from "mongoose";
const itemDetailsSchema = new mongoose.Schema({
    ItemName: {
        type: String,
        required: true
    },
    ItemDescription: {
        ItemCategory: {
            type: String,
            required: true
        },
        ItemModelNo: {
            type: String,
            required: true
        },
        ItemBrand: {
            type: String,
            required: true
        },
        ItemCondition: {
            type: String,
            enum: ['Good', 'Average', 'Worst'],
            default: 'Good',
            required: true
        },
        ItemWeight: {
            type: Number,
            required: true
        }
    },
    ItemImage: {
        type: URL,
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