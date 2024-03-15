import express from 'express';
import dbConnect from './Config/dbConnect.js';
import customerRoute from './Routes/customerRoutes.js';
import collectionAgentRoute from './Routes/collectionAgentRoutes.js';
import addRemoveItemRoute from './Routes/addRemoveItem.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

dbConnect();

app.use('/customer', customerRoute);
app.use('/collectionAgent', collectionAgentRoute);
app.use('/addRemoveItem', addRemoveItemRoute);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.listen(3000, () => {
    console.log('Server started at port number 3000..');
});