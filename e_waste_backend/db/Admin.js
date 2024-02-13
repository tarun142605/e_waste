const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    Name: String,
    Age: Number,
    Email: String,
    Address:{
        HouseNo: String,
        Street: String,
        City: String,
        State: String,
        Pincode: String,
    },
    Contact: String,
    UserName: String,
    Password: String,
});
module.exports = mongoose.model("Admin", userSchema);