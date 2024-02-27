import express from 'express';
const router = express.Router();
import { registerCustomer } from '../Controllers/customerController.js';

// Route URL for register customer
router.post('/register', registerCustomer);

//  Route URL for get all customers
//router.get('/getCustomerByEmail', getCustomerByEmail);

//  API for update customer details

export default router;