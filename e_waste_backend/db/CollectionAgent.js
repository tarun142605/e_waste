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
    Contact: number,
    Certificate: {
        CertificateNo: String,
        CertificateType: String,
        CertificateImage: String,
    },
    Identity: {
        IdentityNo: String,
        IdentityType: String,
        IdentityImage: String,
    },
    UserName: String,
    Password: String,
});
module.exports = mongoose.model("CollectionAgent", userSchema);