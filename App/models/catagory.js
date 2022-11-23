const mongoose = require("mongoose")

const schema = mongoose.schema

const categorySchema = new mongoose.Schema({
    name :{
        type:"string",
        requried: true 
    }
})

const Category = mongoose.model("Category" , categorySchema)

module.exports = Category