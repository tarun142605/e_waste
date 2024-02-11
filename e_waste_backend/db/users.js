const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});
module.exports = mongoose.model("users", userSchema); // users is table name which is present in mongodb atlas