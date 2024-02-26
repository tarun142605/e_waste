import express from 'express';
import { loginCustomer,registerCustomer,getCustomerProfile,updateCustomerProfile,getCustomers,getCustomerById,updateCustomer,deleteCustomer } from '../controllers/customerController.js';
const router = express.Router();

router.route('/').post(loginCustomer).get(getCustomers);
router.post('/customer/registerlogin', registerCustomer);
router.route('/customer/profile').get(getCustomerProfile).put(updateCustomerProfile);
router.get('/customer/:id', getCustomerById);
router.put('/update/customer/:id', updateCustomer);
router.delete('/delete/customer/:id', deleteCustomer);

export default router;