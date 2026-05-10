const express = require("express")
const router = express.Router()
const aiController = require("../controllers/aiController")

router.post("/recommendations", aiController.aiRecommendations)
router.post("/summary", aiController.aiSummary)
router.post("/chat", aiController.aiChat)

module.exports = router
