
import Product from "../model/product.js";


//Create
export async function CreateProduct(req, res) {

    try {
        // your logic here

        await Product.create(req.body);

        res.json({
            status: true,
            message: 'product created successfully'
        });

    } catch (e) {
        res.status(500).json({
            status: false,
            message: e.message
        });
    }

}



// GetAllProduct
export async function GetAllProduct(req, res) {

    const products = await Product.find({}).exec()

    res.json({
        status: true,
        data: products

    })

}

// GetById
export async function GetProductById(req, res) {
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


// Update 
export async function UpdateProduct(req, res) {
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



// Delete
export async function DeleteProduct(req, res) {
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