import mongoose from "mongoose";
//import bcrypt from 'bcrypt';
const customerSchema = mongoose.Schema({
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
},{
    timestamps: true
});

// customerSchema.methods.matchPassword = async function(enteredPassword){
//     return await bcrypt.compare(enteredPassword, this.password)
// }

// customerSchema.pre('save', async function (next){
//     if(!this.isModified('password')){
//         next()
//     }

//     const salt = await bcrypt.genSalt(10)
//     this.password = await bcrypt.hash(this.password, salt)
// })

const customer = mongoose.model("Customer", customerSchema);
export default customer;