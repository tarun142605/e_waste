// Initialize the server and connect to the database
import express from 'express';
import connectDB from './Config/dbConnect.js';
import customerRoute from './Routes/customerRoutes.js';
import collectionAgentRoute from './Routes/collectionAgentRoutes.js';
import cors from 'cors';

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Database Connection
connectDB();

// Routes
app.use('/customers', customerRoute);
app.use('/collectionAgents', collectionAgentRoute);

// Home Route
app.get('/', (req, res) => {
     res.send('API is running');
});

// Server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});