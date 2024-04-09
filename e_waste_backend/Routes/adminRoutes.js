import express from 'express';
const router = express.Router();
import { getAllCustomers } from '../Controllers/customerController.js';
import { getAllCollectionAgents } from '../Controllers/collectionAgentControllers.js';
import { getAllItems } from '../Controllers/addRemoveProductControllers.js';
import { getTicketByCustomerID, getTicketByCollectionAgentID } from "../Controllers/ticketController.js";


// Route URL for getting all customers
router.get('/getAllCustomers', getAllCustomers);

// Route URL for getting all collection agents
router.get('/getAllCollectionAgents', getAllCollectionAgents)

// Route URL for getting all items
router.get('/getAllItems', getAllItems);

// Route URL for getting all tickets from customer id
router.get('/getTicketByCustomerID', getTicketByCustomerID);

// Route URL for hetting all tickets from collection agent id
router.get('/getTicketByCollectionAgentID', getTicketByCollectionAgentID);

export default router;