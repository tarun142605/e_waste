import express from "express";
const router = express.Router();
import { addProduct, getProducts, removeProduct } from '../Controllers/addRemoveProductControllers.js';

// Route URL for add item
router.post("/addItem", addProduct);

// Route URL for remove item
router.delete("/removeItem", removeProduct);

// Route URL for get all products
router.get('/getProducts', getProducts);

export default router;