const mongoose = require("mongoose")
const connectDatabase = () => {
    console.log('ddd',process.env.DB_URI)
    mongoose.connect(process.env.DB_URI, { useNewUrlParser: true }).then((data) => {
        console.log(`Mongodb connected with server : ${data.connection.host}`)
    })
}

module.exports = connectDatabase