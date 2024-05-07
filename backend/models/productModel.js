const { request } = require('express');
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pls enter the product name"],
        trim: true,
        maxLength: [100, "Product name cannot exceed 100 charecters"]
    },
    price: {
        type: Number,
        required: true,
        default: 0.0
    },
    description: {
        type: String,
        required: [true, "Pls enter Product description"]
    },
    ratings: {
        type: String,
        default: 0
    },
    images: [
        {
            image: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Pls enter Product category"],
        enum: {
            values: [
                'Mobile Phones',
                'Accessories',
                'Laptops',
                'Headphones',
                'Sports'
            ],
            message: "Pls Select Correct category"
        }
    },
    seller: {
        type: String,
        requestd: [true, "Pls enter Product seller"]
    },
    stock: {
        type: Number,
        required: [true, "Pls enter Product stock"],
        maxLength: [20, 'Product cannot exceed 20']
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [{
        name: {
            type: String,
            required: true
        },
        rating: {
            type: String,
            required: true
        },
        comment: {
            type: String,
            required: true
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('Product', ProductSchema);

module.exports = schema;