const mongoose = require("mongoose")

const configureDb = () =>{
    mongoose.connect("mongodb;//localhost:27017/nov2022")
    .then(() =>{
        console.log("connect to db")
    })
    .catch((err) =>{
        console.log("err to connect to db")
    })
}

module.exports = configureDb