import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://MongoDBAdmin:Admin@e-waste.akptqh7.mongodb.net/?retryWrites=true&w=majority/ewasteDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Database connected');
})
.catch((err) => {
    console.log(err);
});
