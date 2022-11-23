const express = require("express")
const router = express.Router()
const taskCltr = require("../App/controllers/taskCltr")

router.get("/api/tasks" , taskCltr.list )
router.post("/api/tasks" , taskCltr.create)
router.get("/api/tasks/:id" , taskCltr.show)

module.exports = router 