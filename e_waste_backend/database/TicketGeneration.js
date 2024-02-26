import mongoose from "mongoose";
const { Schema, model } = mongoose;
const ticketGenerationSchema = new Schema({
    TicketId: {
        type : String,
        required : true
    },
    CustomerId: {
        type : String,
        required : true,
        ref : "Customer"
    },
    CustomerAddress: {
        HouseNo: {
            type : String,
            required : true,
            ref : "Customer"
        },
        Street: {
            type : String,
            required : true,
            ref : "Customer"
        },
        City: {
            type : String,
            required : true,
            ref : "Customer"
        },
        State: {
            type : String,
            required : true,
            ref : "Customer"
        },
        Pincode: {
            type : String,
            required : true,
            ref : "Customer"
        },
    },
    ItemDetails: {
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
        },
        ItemStatus: {
            type : String,
            required : true
        },
        ItemImage: {
            type : URL,
            required : true
        },
        Itemprice: {
            type : Number,
            required : true
        },
    },
    CollectionAgentId: {
        type : String,
        required : true,
        ref : "CollectionAgent"
    },
    TicketStatus: {
        type : String,
        required : true
    },
    TicketDate: {
        type : Date,
        required : true
    },
    TicketTime: {
        type : String,
        required : true
    },
},{
    timestamps: true
});

export default model("TicketGeneration", ticketGenerationSchema);