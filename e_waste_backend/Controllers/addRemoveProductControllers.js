import asyncHandler from "express-async-handler";
import itemDetails from "../DatabaseModels/itemDetailsModel.js";

// Add a new product
// POST /api/itemDetails
// Public
const addProduct = asyncHandler(async (req, res) => {
    let product = new itemDetails(req.body);
    const createdProduct = await itemDetails.create(product);
    if(createdProduct){
        res.status(200).json({
            ItemName: createdProduct.ItemName,
            ItemCategory: createdProduct.ItemCategory,
            ItemCondition: createdProduct.ItemCondition,
            ItemWeight: createdProduct.ItemWeight,
            ItemImage: createdProduct.ItemImage
        });
    }else{
        res.status(404).send("Item not created");
    }
    
});

// Get all products
// GET /api/getProducts
// private/public
const getProducts = asyncHandler(async (req, res) => {
    let products = await itemDetails.find();
    if (products) {
        res.status(200).json(products);
    } else {
        res.status(404).send('Products not found');
    }
});

// Update products
// PUT /api/updateProduct
// private/public
const updateProducts = asyncHandler((req,res)=>{
    let itemID = ite
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

export {addProduct, removeProduct, getProducts};
