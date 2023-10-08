const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
    const { token } = req.cookies;
    console.log('after token')
    if (!token) {
        return next(new ErrorHandler("Please Login to access this resource", 401))
    }
    const decodedData = jwt.verify(token, process.env.JWT_SECRET)
    console.log('decoded data ===', decodedData)

    req.user = await User.findById(decodedData.id)
    next();
})

exports.authorizeRoles = async (req, res, next) => {
    console.log('roles runnig ', req.user.role)

    if (!("admin" === req.user.role)) {
        return next(new ErrorHandler(`Role ${req.user.role} is not allowed to access this resource`, 403))
    }
    next()


}