import mongoose from "mongoose";
const { Schema, model } = mongoose;
const itemDetailSchema = new Schema({
    Itemname: {
        type : String,
        required : true
    },
    Itemdescription:{
        ItemCategory: { 
            type: String,
            required: true
        },
        Itemweight: {
            type : Number,
            required : true
        },
        Itemprice: {
            type: String,
            required: true
        },
    },
    ItemStatus: {
        type : String,
        required : true
    },
},{
    timestamps: true
});
export default model("ItemDetails", itemDetailSchema);