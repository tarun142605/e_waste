import express from "express";
const router = express.Router();
import { addItem, removeItem } from "../Controllers/addRemoveItemController.js";

// Route URL for add item
router.post("/addItem", addItem);

// Route URL for remove item
router.delete("/removeItem", removeItem);

export default router;