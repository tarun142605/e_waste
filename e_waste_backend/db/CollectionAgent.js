import mongoose from "mongoose";
const { Schema, model } = mongoose;
const collectionAgentSchema = new Schema({
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
    Certificate: {
        CertificateNo: {
            type : String,
            required : true
        },
        CertificateType: {
            type : String,
            required : true
        },
        CertificateImage: {
            type : URL,
            required : true
        },
    },
    Identity: {
        IdentityNo: {
            type : String,
            required : true
        },
        IdentityType: {
            type : String,
            required : true
        },
        IdentityImage: {
            type : URL,
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


export default model("CollectionAgent", collectionAgentSchema);