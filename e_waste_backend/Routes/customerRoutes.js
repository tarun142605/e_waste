import express from 'express';
const router = express.Router();
import { loginCustomer, registerCustomer, getCustomer, deleteCustomer, updateCustomer } from '../Controllers/customerController.js';
import { customerValidater } from '../middleware/validateToken.js';

// Route URL for Login for customer
router.post('/loginCustomer', loginCustomer);

// Route URL for register customer
router.post('/registerCustomer', registerCustomer);

//  Route URL for get all customers
router.get('/getCustomerByEmail', customerValidater, getCustomer);

//  Route URL for update customers
router.put('/updateCustomer', customerValidater, updateCustomer);

//  Route URL for delete customer details
router.delete('/deleteCustomer', customerValidater, deleteCustomer);

export default router;