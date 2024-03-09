import asyncHandler from "express-async-handler";
import itemDetails from "../DatabaseModels/itemDetailsModel.js";

// Add a new product
// POST /api/itemDetails
// Public
const addProduct = asyncHandler(async (req, res) => {
    let { ItemName, ItemCategory, ItemCondition, ItemWeight, ItemImage } = req.body;
    let product = new itemDetails({
        ItemName,
        ItemCategory,
        ItemCondition,
        ItemWeight,
        ItemImage
    });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});

// Remove a product
// DELETE /api/itemDetails/:id
// Public
const removeProduct = asyncHandler(async (req, res) => {
    let product = await itemDetails.findById(req.params.id);
    if (product) {
        await product.remove();
        res.json({ message: 'Product removed' });
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});

export { addProduct, removeProduct };
