import express from "express";
const router = express.Router();
import { createItem, getItems, updateItem, removeItem } from '../Controllers/addRemoveProductControllers.js';

// Route URL for add item
router.post("/addItem", createItem);

// Route URL for get all products
router.get('/getItems', getItems);

// Route URL for update product
router.put('/updateItem', updateItem);

// Route URL for remove item
router.delete("/removeItem", removeItem);

export default router;