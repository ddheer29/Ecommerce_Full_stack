import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
    createProductController,
    deleteProductController,
    getProductController,
    getSingleProduct,
    productCountController,
    productFiltersController,
    productPerPageController,
    productPhotoController,
    updateProductController,
    searchProductController,
    relatedProductController,
    productCategoryController
} from "../controller/productController.js";
import formidable from 'express-formidable'

const router = express.Router();

// routes
router.post("/create-product", requireSignIn, isAdmin, formidable(), createProductController);

// update product
router.put("/update-product/:pid", requireSignIn, isAdmin, formidable(), updateProductController);

// get products
router.get('/get-product', getProductController);

// single product
router.get('/get-product/:slug', getSingleProduct);

// get photo
router.get('/product-photo/:pid', productPhotoController);

// delete products
router.delete('/delete-product/:pid', deleteProductController);

// filter product
router.post('/product-filters', productFiltersController);

//product count
router.get('/product-count', productCountController);

// product per page
router.get('/product-list/:page', productPerPageController);

// search product
router.get('/search/:keyword', searchProductController);

// similar product
router.get('/related-product/:pid/:cid', relatedProductController);

// category wise product
router.get('/product-category/:slug', productCategoryController);


export default router