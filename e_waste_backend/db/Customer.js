import mongoose from "mongoose";
const { Schema, model } = mongoose;
const customerSchema = new Schema({
    Name: {
        type : String,
        required : true
    },
    Email: {
        type : String,
        unique : true,
        required : true
    },
    Address:{
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
    Contact: {
        type : Number,
        required : true
    },
    UserName: {
        type : String,
        unique : true,
        required : true
    },
    Password: {
        type : String,
        required : true
    },
});

export default model("Customer", customerSchema);