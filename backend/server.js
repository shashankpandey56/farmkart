const app = require('./app')
const dotenv = require('dotenv')
const connectDatabase = require('./config/database')
const s3Operations = require('./s3');
// const cors = require('cors');

//handling uncaught exception 
process.on('uncaughtException', (err) => {
    console.log(`Error == ${err.message}`)
    console.log('shutting down the server due to uncaught exception')
    server.close(() => {
        process.exit(1)
    })
})

dotenv.config({ path: "backend/config/config.env" })

//database connection
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

connectDatabase()
const server = app.listen(process.env.PORT, () => {
    console.log(`server is up and running on ${process.env.PORT}`)
})


// Handling promise rejection

process.on('unhandledRejection', (err) => {
    console.log(`Error == ${err.message}`)
    console.log('shutting down the server due to unhandled promise rejection')
    server.close(() => {
        process.exit(1)
    })
})