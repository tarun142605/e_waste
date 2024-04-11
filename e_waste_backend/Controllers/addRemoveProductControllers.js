import asyncHandler from "express-async-handler";
import itemDetails from "../DatabaseModels/itemDetailsModel.js";

// Add a new item
// POST /api/itemDetails
// Public
const createItem = asyncHandler(async (req, res) => {
    let item = new itemDetails(req.body);
    const createdItem = await itemDetails.create(item);
    if (createdItem) {
        res.status(200).json({
            itemName: createdProduct.itemName,
            itemCategory: createdProduct.itemCategory,
            itemCondition: createdProduct.itemCondition,
            itemWeight: createdProduct.itemWeight,
            itemImage: createdProduct.itemImage
        });
    } else {
        res.status(404).send("Item not created");
    }

});

// Get all item
// GET /api/getItem
// private/public
const getItems = asyncHandler(async (req, res) => {
    let items = await itemDetails.find();
    if (items) {
        res.status(200).json(items);
    } else {
        res.status(404).send('Products not found');
    }
});

// Get all items
// GET/api/items
// admin
const getAllItems = asyncHandler(async (req, res) => {
    let allItems = await itemDetails.find();
    if (allItems) {
        res.status(200).json(allItems);
    } else {
        res.status(401);
        throw new Error('invalid request');
    }
});

// Update item
// PUT /api/updateItem
// private/public
const updateItem = asyncHandler(async (req, res) => {
    let itemID = req.query.id;
    let product = await itemDetails.findByIdAndUpdate(itemID, {
        itemName: req.body.itemName,
        itemCategory: req.body.itemCategory,
        itemCondition: req.body.itemCondition,
        itemWeight: req.body.itemWeight,
        itemImage: req.body.itemImage
    });
    if (product) {
        res.status(200).send('Product updated');
    } else {
        res.status(404).send('Some error occured');
    }
});

// Remove a item
// DELETE /api/itemDetails/:id
// Public
const removeItem = asyncHandler(async (req, res) => {
    let itemID = req.query.id;
    let removedItem = await itemDetails.findByIdAndDelete(itemID);
    if (removedItem) {
        res.status(200).send('Item removed');
    } else {
        res.status(404).send('Item not removed');
    }
});

export { createItem, getItems, updateItem, removeItem, getAllItems };
