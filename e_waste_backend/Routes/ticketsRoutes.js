import express from "express";
const router = express.Router();
import { getTicketByCustomerID, createTicket, updateTicket} from "../Controllers/ticketController.js";

// Route URL for gettig ticktes by customer id
router.get('/getTickets', getTicketByCustomerID);

// Route URL for creating ticket
router.post('/createTicket', createTicket);

// Route URL for updating ticket
router.put('/updateTicket', updateTicket);

export default router;