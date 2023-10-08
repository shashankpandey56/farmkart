const express = require('express')
const app = express()
const dotenv = require('dotenv')
const erorrMiddleware = require('./middleware/error')
const cookieParser = require('cookie-parser')
const s3Operations = require('./s3');
dotenv.config({ path: "backend/config/config.env" })



app.use(express.json())
app.use(cookieParser())
//routes
const product = require("./routes/productRoutes")
const user = require("./routes/userRoutes")
const order = require("./routes/orderRoute")

app.use("/api/v1", product)
app.use("/api/v1", user)
app.use("/api/v1", order)


// Define a route for uploading a file to S3
app.post('/upload', async (req, res) => {
  try {
    // Perform S3 upload using the s3Operations module
    console.log('s3 object is running')
    const result = await s3Operations.putObject(req.body.filename, req.body.data);
    res.json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred during the upload.' });
  }
});

app.use(erorrMiddleware)

module.exports = app