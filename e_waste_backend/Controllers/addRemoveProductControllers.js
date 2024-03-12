import asyncHandler from "express-async-handler";
import itemDetails from "../DatabaseModels/itemDetailsModel.js";

// Add a new item
// POST /api/itemDetails
// Public
const addItem = asyncHandler(async (req, res) => {
    let item = new itemDetails(req.body);
    const createdItem = await itemDetails.create(item);
    if (createdItem) {
        res.status(200).json({
            ItemName: createdProduct.ItemName,
            ItemCategory: createdProduct.ItemCategory,
            ItemCondition: createdProduct.ItemCondition,
            ItemWeight: createdProduct.ItemWeight,
            ItemImage: createdProduct.ItemImage
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

// Update item
// PUT /api/updateItem
// private/public
const updateItem = asyncHandler(async (req, res) => {
    let itemID = req.query.id;
    let product = await itemDetails.findByIdAndUpdate(itemID,{
        ItemName: req.body.ItemName,
        ItemCategory: req.body.ItemCategory,
        ItemCondition: req.body.ItemCondition,
        ItemWeight: req.body.ItemWeight,
        ItemImage: req.body.ItemImage
    });
    if(product){
        res.status(200).send('Product updated');
    }else{
        res.status(404).send('Some error occured');
    }
});

// Remove a item
// DELETE /api/itemDetails/:id
// Public
const removeItem = asyncHandler(async (req, res)=>{
    let itemID = req.query.id;
    let removedItem = await itemDetails.findByIdAndDelete(itemID);
    if(removedItem){
        res.status(200).send('Item removed');
    }else{
        res.status(404).send('Item not removed');
    }
});

export { addItem, getItems, updateItem, removeItem };
