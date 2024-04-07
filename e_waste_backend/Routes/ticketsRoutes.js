import express from "express";
const router = express.Router();
import { addToCart, removeFromCart, getTicketByID } from "../Controllers/ticketController.js";

// Route URL for add items to cart
router.post('/addToCart', addToCart);

// Route URL for remove from cart
router.delete('/removeFromCart', removeFromCart);

// Route URL for gettig ticktes by customer id
router.get('/getTickets', getTicketByID);

export default router;