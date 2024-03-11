import express from "express";
const router = express.Router();
import { addProduct, getProducts, removeProduct, updateProducts } from '../Controllers/addRemoveProductControllers.js';

// Route URL for add item
router.post("/addItem", addProduct);

// Route URL for remove item
router.delete("/removeItem", removeProduct);

// Route URL for get all products
router.get('/getProducts', getProducts);

// Route URL for update product
router.put('/updateProduct/:id', updateProducts);

export default router;