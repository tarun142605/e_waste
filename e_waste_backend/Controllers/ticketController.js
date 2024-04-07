import asyncHandler from 'express-async-handler';
import { customerID } from '../Controllers/customerController.js';
var cart = [];

// Add to cart
// POST/api/tickest
// public
const addToCart = asyncHandler((req, res) => {
    cart.push(req);
    res.send(cart);
});

// Remove from cart
// DELETE/api/tickest
// public
const removeFromCart = asyncHandler((req, res) => {
    cart.pop(req);
    res.send(cart);
});

const getTicketByID = asyncHandler((req, res) => {
    res.send(customerID);
});

export { addToCart, removeFromCart, getTicketByID};