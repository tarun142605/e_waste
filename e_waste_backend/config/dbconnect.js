import mongoose from 'mongoose';

// Connect to MongoDB
mongoose.connect('mongodb+srv://MongoDBAdmin:Admin@e-waste.akptqh7.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('Database connected');
})
.catch((err) => {
    console.log(err);
});
