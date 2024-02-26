import express from 'express';
import { registerCustomer, getCustomers, updateCustomer,deleteCustomer} from '../controllers/customerController.js';
const router = express.Router();

router.route('/').get(getCustomers);
router.route('/register').post(registerCustomer);
//router.route('/update').put(updateCustomer);
//router.route('/delete').delete(deleteCustomer);

export default router;