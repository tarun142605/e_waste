const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    Itemname: String,
    Itemdescription:{
        ItemCategory: String,
        Itemweight: Number,
        Itemprice: String,
    },
    ItemStatus: String,
});
module.exports = mongoose.model("ItemDetails", userSchema);