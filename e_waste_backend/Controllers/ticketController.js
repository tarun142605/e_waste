import asyncHandler from 'express-async-handler';
import { customer_ID } from '../Controllers/customerController.js';
import { collectionAgent_ID } from '../Controllers/collectionAgentControllers.js';
import Ticket from '../DatabaseModels/TicketGeneration.js';
import Customer from '../DatabaseModels/customerModel.js';
import CollectionAgent from '../DatabaseModels/collectionAgentModel.js';
import ItemDetails from "../DatabaseModels/itemDetailsModel.js";
import cryptoRandomString from 'crypto-random-string';

// Get all tickets by custome_id
// GET/api/tickets
// public
const getTicketByCustomerID = asyncHandler(async (req, res) => {
    let customerTickets = await Ticket.find({ customerID: customer_ID });
    if (customerTickets) {
        res.status(200).json(customerTickets);
    } else {
        res.status(400);
        throw new Error("invalid customer id");
    }
});

// Get all tickets by collectionagent_id
// GET/api/tickets
// public
const getTicketByCollectionAgentID = asyncHandler(async (req, res) => {
    let collectionAgentTickets = await Ticket.find({ collectionAgentID: collectionAgent_ID });
    if (collectionAgentTickets) {
        res.status(200).json(collectionAgentTickets);
    } else {
        res.status(400);
        throw new Error("invalid collectionagent id");
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
        price: item.price,
        collectionAgentID: null,
        collectionAgentName: null,
        collectionAgentcontact: null,
    });
    if (createdTicket) {
        res.status(200).json(createdTicket);
    } else {
        res.status(400);
        throw new Error("invalid ticket data");
    }
});

// Update ticket
// POST/api/tickets
//public
const updateTicket = asyncHandler(async (req, res) => {
    let ticket = await Ticket.findOne({ ticketNo: req.body.ticketNo });
    if (ticket) {
        let collectionAgentDetails = await CollectionAgent.findById(collectionAgent_ID);
        let updatedTicket = await Ticket.findOneAndUpdate({ ticketNo: req.body.ticketNo }, {
            collectionAgentID: collectionAgentDetails._id,
            collectionAgentName: collectionAgentDetails.firstName + " " + collectionAgentDetails.lastName,
            collectionAgentcontact: collectionAgentDetails.contact
        });
        if (updatedTicket) {
            res.status(200).json(updatedTicket)
        } else {
            res.status(401);
            throw new Error("ticket not updated");
        }
    } else {
        res.status(401);
        throw new Error("invalid ticket number");
    }
});

export { getTicketByCustomerID, getTicketByCollectionAgentID, createTicket, updateTicket };