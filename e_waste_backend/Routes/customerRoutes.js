import express from 'express';
const router = express.Router();
import { loginCustomer, registerCustomer, getCustomer, deleteCustomer, updateCustomer } from '../Controllers/customerController.js';
import { validateToken } from '../middleware/validateToken.js';

// Route URL for Login for customer
router.post('/loginCustomer', loginCustomer);

// Route URL for register customer
router.post('/registerCustomer', registerCustomer);

//  Route URL for get all customers
router.get('/getCustomerByEmail', validateToken, getCustomer);

//  Route URL for update customers
router.put('/updateCustomer', updateCustomer);

//  Route URL for delete customer details
router.delete('/deleteCustomer', deleteCustomer);

export default router;