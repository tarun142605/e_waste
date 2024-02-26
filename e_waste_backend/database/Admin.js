import mongoose from "mongoose";
import bcrypt from 'bcrypt';
const adminSchema = new Schema({
    Name: {
        type : String,
        required : true
    },
    Email: {
        type : String,
        unique : true,
        required : true
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

adminSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

adminSchemaSchema.pre('save', async function (next){
    if(!this.isModified('password')){
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const admin = mongoose.model('Admin', adminSchema);
export default admin;