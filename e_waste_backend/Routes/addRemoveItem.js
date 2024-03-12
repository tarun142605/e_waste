import express from "express";
const router = express.Router();
import { addItem, getItems, updateItem, removeItem } from '../Controllers/addRemoveProductControllers.js';

// Route URL for add item
router.post("/addItem", addItem);

// Route URL for get all products
router.get('/getItem', getItems);

// Route URL for update product
router.put('/updateItem', updateItem);

// Route URL for remove item
router.delete("/removeItem", removeItem);

export default router;