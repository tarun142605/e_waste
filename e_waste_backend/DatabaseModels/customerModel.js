import mongoose from "mongoose";
const customerSchema = new mongoose.Schema({
    Name: {
        FirstName: {
            type: String,
            required: true
        },
        LastName: {
            type: String,
            required: true
        }
    },
    Email: {
        type: String,
        required: true
    },
    Address: {
        HouseNo: {
            type: String,
            required: true
        },
        Street: {
            type: String,
            required: true
        },
        City: {
            type: String,
            required: true
        },
        State: {
            type: String,
            required: true
        },
        Pincode: {
            type: String,
            required: true
        }
    },
    Contact: {
        type: Number,
        min: 10,
        max: 10,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Customer = mongoose.model('Customer', customerSchema);
export default Customer;