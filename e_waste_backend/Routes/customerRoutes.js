import express from 'express';
const router = express.Router();
<<<<<<< HEAD
import { loginCustomer,registerCustomer,getCustomer,updateCustomer,deleteCustomer } from '../Controllers/customerController.js';
=======
import { loginCustomer,registerCustomer,getCustomer,deleteCustomer, updateCustomer } from '../Controllers/customerController.js';
>>>>>>> 8e7aae5cdaf84f3e129fc247a7e65a0a308d584c

// Route URL for Login for customer
router.get('/loginCustomer', loginCustomer);

// Route URL for register customer
router.post('/registerCustomer', registerCustomer);

//  Route URL for get all customers
router.get('/getCustomerByEmail', getCustomer);

//  Route URL for update customers
router.put('/updateCustomer', updateCustomer);``

//  Route URL for delete customer details
router.delete('/deleteCustomer', deleteCustomer);

//  Route URL for update customer details
router.put('/updateCustomer', updateCustomer) 

export default router;