import mongoose from "mongoose";
import bcrypt from 'bcrypt';
const collectionAgentSchema = mongoose.Schema({
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
},{
    timestamps: true
});

collectionAgentSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

collectionAgentSchema.pre('save', async function (next){
    if(!this.isModified('password')){
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const collectionAgent = mongoose.model("CollectionAgent", collectionAgentSchema);
export default collectionAgent;