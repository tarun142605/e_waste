import express from 'express';
import customerRoute from './Routes/customerRoutes.js';
//import collectionAgentRoute from './Routes/collectionAgentRoutes.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/customer', customerRoute);
//app.use('/collectionAgent', collectionAgentRoute);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.listen(3000, () => {
    console.log('Server started at port number 3000..');
});