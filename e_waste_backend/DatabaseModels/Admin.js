import mongoose from "mongoose";
const adminSchema = new mongoose.Schema({
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
    Contact: {
        type: String,
        required: true
    },
    UserName: {
        type: String,
        unique: true,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Admin = mongoose.model('Admin', adminSchema);
export default Admin;