import express from 'express';
const router = express.Router();
import { registerCustomer,getCustomer,deleteCustomer } from '../Controllers/customerController.js';

// Route URL for register customer
router.post('/registerCustomer', registerCustomer);

//  Route URL for get all customers
router.get('/getCustomerByEmail', getCustomer);

//  Route URL for delete customer details
router.delete('/deleteCustomer', deleteCustomer);

export default router;