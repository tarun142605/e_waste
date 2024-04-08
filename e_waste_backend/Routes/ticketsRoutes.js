import express from "express";
const router = express.Router();
import { getTicketByID, createTicket } from "../Controllers/ticketController.js";

// Route URL for gettig ticktes by customer id
router.get('/getTickets', getTicketByID);

// Route URL for creating ticket
router.post('/createTicket', createTicket);

export default router;