import express from "express";
const router = express.Router();
import { getTicketByCustomerID, createTicket, updateTicket, getAllTickets, getTicketByCollectionAgentID } from "../Controllers/ticketController.js";

// Route URL for getting all the tickets for collectionagents
router.get('/getTickets', getAllTickets);

// Route URL for gettig ticktes by customer id
router.get('/getTicketByCustomerID', getTicketByCustomerID);

// Route URL for gettig ticktes by customer id
router.get('/getTicketByCollectionAgentID', getTicketByCollectionAgentID);

// Route URL for creating ticket
router.post('/createTicket', createTicket);

// Route URL for updating ticket
router.put('/updateTicket', updateTicket);

export default router;