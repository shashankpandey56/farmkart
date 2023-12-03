const Product = require('../models/productModel')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middleware/catchAsyncError')
const ApiFeatures = require('../utils/apiFeatures')
const fs = require('fs');
const { promisify } = require('util');

const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId:process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.REGION,
});
const s3 = new AWS.S3();



const uploadedToAws = async (images) => {
    const response = {};
    try {
        const currentDate = Date.now();
        const imageBuffer = fs.readFileSync(images.url);
        const awsKey = images.public_id + String(currentDate);
        
        const uploadParams = {
            Bucket: process.env.BUCKET,
            Key: awsKey,
            Body: imageBuffer,
            ACL: 'public-read'
        };

        const putObject = promisify(s3.putObject).bind(s3);
        const data = await putObject(uploadParams);
        response['status'] = 200;
        response['message'] = "Uploaded successfully";
        response['imageName'] = awsKey
        response['data'] = data;
        return response;
    } catch (error) {
        console.error('Error uploading object:', error);
        response['status'] = 500;
        response['message'] = "Upload failed";
        return response;
    }
};

//Create product 
exports.createProduct = catchAsyncError(async (req, res) => {
    req.body.user = req.user.id
    const data = req.body
    const images = data.images
    const awsData = await uploadedToAws(images)
    if(awsData.status === 200){
        data.images = {"public_id": awsData.imageName,"url":images.url}
        const product = await Product.create(data)
        res.status(201).json({
            success: true,
            product

        })

    }
    
})



exports.getAllProducts = catchAsyncError(async (req, res) => {
    const resultPerPage = 5
    const productCount = await Product.countDocuments();
    const apiFeature = new ApiFeatures(Product, req.query).search().filter().pagination(resultPerPage)
    const products = await apiFeature.query;
    res.status(200).json({ success: true, products, productCount })
})
//update product--admin

exports.updateProduct = catchAsyncError(async (req, res) => {
    let product = await Product.findById(req.params.id)

    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    return res.status(200).json({
        success: true,
        product
    })

})

//Delete a product

exports.deleteProduct = catchAsyncError(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
        res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }
    await product.deleteOne()
    return res.status(200).json({
        status: true,
        message: "product deleted successfully"
    })
})

//Get single product 

exports.getProductDetails = catchAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.params.id)

    if (!product) {
        return next(new ErrorHandler("Product not found", 404))
    }
    return res.status(200).json({
        success: true,
        product
    })

})

// Create New Review or Update the review
exports.createProductReview = catchAsyncError(async (req, res, next) => {
    const { rating, comment, productId } = req.body;

    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment,
    };

    const product = await Product.findById(productId);

    const isReviewed = product.reviews.find(
        (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isReviewed) {
        product.reviews.forEach((rev) => {
            if (rev.user.toString() === req.user._id.toString())
                (rev.rating = rating), (rev.comment = comment);
        });
    } else {
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length;
    }

    let avg = 0;

    product.reviews.forEach((rev) => {
        avg += rev.rating;
    });

    product.ratings = avg / product.reviews.length;

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
    });
});

// Get All Reviews of a product
exports.getProductReviews = catchAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.query.id);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    res.status(200).json({
        success: true,
        reviews: product.reviews,
    });
});

// Delete Review
exports.deleteReview = catchAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.query.productId);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    const reviews = product.reviews.filter(
        (rev) => rev._id.toString() !== req.query.id.toString()
    );

    let avg = 0;

    reviews.forEach((rev) => {
        avg += rev.rating;
    });

    let ratings = 0;

    if (reviews.length === 0) {
        ratings = 0;
    } else {
        ratings = avg / reviews.length;
    }

    const numOfReviews = reviews.length;

    await Product.findByIdAndUpdate(
        req.query.productId,
        {
            reviews,
            ratings,
            numOfReviews,
        },
        {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        }
    );

    res.status(200).json({
        success: true,
    });
});