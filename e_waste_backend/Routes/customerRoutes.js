import express from 'express';
const router = express.Router();
import { loginCustomer,registerCustomer,getCustomer,deleteCustomer, updateCustomer } from '../Controllers/customerController.js';

// Route URL for Login for customer
router.get('/loginCustomer', loginCustomer);

// Route URL for register customer
router.post('/registerCustomer', registerCustomer);

//  Route URL for get all customers
router.get('/getCustomerByEmail', getCustomer);

//  Route URL for delete customer details
router.delete('/deleteCustomer', deleteCustomer);

//  Route URL for update customer details
router.put('/updateCustomer', updateCustomer) 

export default router;