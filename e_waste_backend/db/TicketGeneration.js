import mongoose from "mongoose";
const { Schema, model } = mongoose;
const ticketGenerationSchema = new Schema({
    TicketId: {
        type : String,
        required : true
    },
    CustomerId: {
        type : String,
        required : true
    },
    CustomerAddress: {
        HouseNo: {
            type : String,
            required : true
        },
        Street: {
            type : String,
            required : true
        },
        City: {
            type : String,
            required : true
        },
        State: {
            type : String,
            required : true
        },
        Pincode: {
            type : String,
            required : true
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
        required : true
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
});

export default model("TicketGeneration", ticketGenerationSchema);