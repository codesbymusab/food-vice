const RestaurantRepoImpl = require("../../infrastructure/database/mongodb/repositories/RestaurantRepoImpl")
const ReviewRepoImpl = require("../../infrastructure/database/mongodb/repositories/ReviewRepoImpl")
const { buildPrompt } = require("../../application/use-cases/ai/AIPromptBuilder")
const GroqService = require("../../infrastructure/services/GroqAI/GroqService")

const groqService = new GroqService()

function parseStrictJson(content) {
  try {
    return JSON.parse(content)
  } catch (error) {
    throw new Error("AI response was not valid JSON")
  }
}

exports.aiRecommendations = async (req, res) => {
  try {
    const { query, location, limitCount = 20, userId } = req.body

    if (!query || !location || typeof location.lat !== "number" || typeof location.lon !== "number") {
      return res.status(400).json({ message: "query and location are required" })
    }

    const restRepo = new RestaurantRepoImpl()
    const nearbyRestaurants = await restRepo.getNearby(
      [location.lon, location.lat],
      { distance: location.radius || 50, limitCount },
      userId
    )

    const prompt = buildPrompt("recommendations", {
      query,
      location,
      restaurants: nearbyRestaurants,
    })

    const aiResponse = await groqService.sendPrompt(prompt)
    const jsonResponse = parseStrictJson(aiResponse)

    return res.status(200).json(jsonResponse)
  } catch (error) {
    console.error(error)
    return res.status(400).json({ message: error.message })
  }
}

exports.aiSummary = async (req, res) => {
  try {
    const { restaurantId, restaurantName, limitCount = 10 } = req.body

    if (!restaurantId || !restaurantName) {
      return res.status(400).json({ message: "restaurantId and restaurantName are required" })
    }

    const reviewRepo = new ReviewRepoImpl()
    const reviews = await reviewRepo.getReviews({ restId: restaurantId, limitCount })

    if (!Array.isArray(reviews) || reviews.length === 0) {
      return res.status(400).json({ message: "No reviews available for this restaurant" })
    }

    const prompt = buildPrompt("summary", {
      restaurantName,
      reviews,
    })

    const aiResponse = await groqService.sendPrompt(prompt)
    const jsonResponse = parseStrictJson(aiResponse)

    return res.status(200).json(jsonResponse)
  } catch (error) {
    console.error(error)
    return res.status(400).json({ message: error.message })
  }
}

exports.aiChat = async (req, res) => {
  try {
    const { messages, location, limitCount = 10, userId } = req.body

    if (!Array.isArray(messages) || !location || typeof location.lat !== "number" || typeof location.lon !== "number") {
      return res.status(400).json({ message: "messages and location are required" })
    }

    const restRepo = new RestaurantRepoImpl()
    const nearbyRestaurants = await restRepo.getNearby(
      [location.lon, location.lat],
      { distance: location.radius || 50, limitCount },
      userId
    )

    const prompt = buildPrompt("chat", {
      messages,
      location,
      restaurants: nearbyRestaurants,
    })

    const aiResponse = await groqService.sendPrompt(prompt)
    const jsonResponse = parseStrictJson(aiResponse)

    return res.status(200).json(jsonResponse)
  } catch (error) {
    console.error(error)
    return res.status(400).json({ message: error.message })
  }
}
