const mongoose = require("mongoose")

// create schema
const Schema = mongoose.Schema

const taskSchema  =  new Schema({
    title:{
        type:"string",
        required:[true , "should not be enty"]
    },
    description:{
        type:"string",

    },
    completed :{
        type: Boolean
    },
    dueDate :{
        type:Date
    },
    createAt:{
        type:Date,
        default:Date.now
    }
})

// create model  

const Task =    mongoose.model("Task" , taskSchema)

module.exports = Task