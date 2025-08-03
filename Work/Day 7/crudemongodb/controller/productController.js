

import Product from '../model/product.js'

import * as z from "zod"; 

import { formatError } from '../helpers/Utils.js';


 
const ProductValidationOnCreate = z.object({ 
  name: z.string(),
description: z.string()
});

ProductValidationOnCreate.required();

export async function listProduct(req, res) {

    const products = await Product.find({}).exec()

    res.json({
        status: true,
        data: products

    })

}

export async function getProductById(req, res) {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({
                status: false,
                message: 'Product not found'
            });
        }

        res.json({
            status: true,
            data: product
        });
    } catch (e) {
        res.status(500).json({
            status: false,
            message: e.message
        });
    }
}




export async function deleteProduct(req, res) {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({
                status: false,
                message: 'Product not found'
            });
        }

        await Product.findByIdAndDelete(productId);

        res.json({
            status: true,
            message: 'product deleted successfully'
        });
    } catch (e) {
        res.status(500).json({
            status: false,
            message: e.message
        });
    }
}




export async function createProduct(req, res) {

    try {
        // your logic here
          ProductValidationOnCreate.parse(req.body);

        await Product.create(req.body);

        res.json({
            status: true,
            message: 'product created successfully'
        });

    } catch (e) {

        if(e instanceof z.ZodError){
            res.status(400).json({
            status: false,
            message: "Validation error",
            errors:formatError(e.issues)

        });

        return;

        }
        res.status(500).json({
            status: false,
            message: e.message
        });
    }

}



export async function updateProduct(req, res) {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({
                status: false,
                message: 'Product not found'
            });
        }

        await Product.findByIdAndUpdate(productId, req.body);

        return res.json({
            status: true,
            message: 'Product updated successfully'
        });
    } catch (e) {
        res.status(500).json({
            status: false,
            message: e.message
        });
    }
}
