import asyncHandler from 'express-async-handler';
import { customer_ID } from '../Controllers/customerController.js';
import Ticket from '../DatabaseModels/TicketGeneration.js';
import Customer from '../DatabaseModels/customerModel.js';
import ItemDetails from "../DatabaseModels/itemDetailsModel.js";
import cryptoRandomString from 'crypto-random-string';

// Get all tickets by custome_id
// GET/api/tickets
// public
const getTicketByID = asyncHandler(async (req, res) => {
    let customerTickets = await Ticket.find({ customerID: customer_ID });
    if (customerTickets) {
        res.status(200).json(customerTickets);
    } else {
        res.status(400);
        throw new Error("invalid customer id");
    }
});

// Create new ticket
// POST/api/tickets
// public
const createTicket = asyncHandler(async (req, res) => {
    let customer = await Customer.findById(customer_ID);
    let item = await ItemDetails.findById(req.body._id);
    let customerIdSub = JSON.stringify(customer_ID).substring(1, 7);
    let ticketIdSub = cryptoRandomString({ length: 4 });
    let ticketId = customerIdSub + "_" + ticketIdSub;

    console.log(ticketId);
    let createdTicket = await Ticket.create({
        ticketNo: ticketId,
        customerID: customer_ID,
        customerName: (customer.firstName + " " + customer.lastName),
        customercontact: customer.contact,
        houseNo: customer.houseNo,
        street: customer.street,
        city: customer.city,
        state: customer.state,
        pincode: customer.pincode,
        itemID: req.body._id,
        price: item.price
    });
    if (createdTicket) {
        res.status(200).json(createdTicket);
    }else{
        res.status(400);
        throw new Error("invalid ticket data");
    }
});

export { getTicketByID, createTicket };