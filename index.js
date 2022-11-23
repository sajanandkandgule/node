const express = require("express")
const app = express()
const port = 3075
const router = require("./config/routes")

const configureDb = require("./config/database")

// set up db
configureDb()

app.use(express.json())
app.use(router)

app.listen(port , () =>{
    console.log("server is running on port " , port)
})


