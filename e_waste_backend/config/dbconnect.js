import mongoose from 'mongoose';

const dbConnect = async () => {
    try {
        await mongoose.connect('mongodb+srv://MongoDBAdmin:Admin@e-waste.akptqh7.mongodb.net/ewasteDB?retryWrites=true&w=majority&appName=E-Waste');        
        console.log("Database Connected to Our Application Successfully!");
    } catch (error) {
        console.error("Error" + error.message);
        process.exit(1);
    }
}

export default dbConnect;
