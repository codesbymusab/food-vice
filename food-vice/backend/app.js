const mongoose = require("mongoose");
const axios = require("axios");

// =========================
// MODELS
// =========================

const Restaurant = require("./infrastructure/database/mongodb/models/Restaurant/RestaurantModel");
const Location = require("./infrastructure/database/mongodb/models/LocationModel");
const Review = require("./infrastructure/database/mongodb/models/Reviews/ReviewModel");
const Rating = require("./infrastructure/database/mongodb/models/Reviews/RatingModel");

// =========================
// USERS POOL
// =========================

const USERS = [
  "69e33bf33120c3c8951309d7",
  "69f0f79d2daa64883fae238b",
  "69f7559204cc4c4c385c53fc",
];

// =========================
// GROQ AI REVIEW GENERATOR
// =========================

async function generateReview(prompt) {
  const res = await axios.post(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  return res.data.choices[0].message.content.trim();
}

// =========================
// RATING GENERATOR
// =========================

function generateRating() {
  const base = 3 + Math.random() * 2;
  return {
    food: Math.round(base),
    service: Math.round(base),
    ambience: Math.round(base),
    price: Math.round(base),
    overall: Math.round(base),
  };
}

// =========================
// MAIN PIPELINE
// =========================

exports.run = async () => {
  try {
    console.log("🚀 Running geo-based location query...");

    // STEP 1: GEO QUERY (LOCATION)
    const nearbyLocations = await Location.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [74.26158778531845, 31.402624376104274],
          },
          distanceField: "distKm",
          spherical: true,
          distanceMultiplier: 0.001,
          maxDistance: 50 * 1000,
        },
      },
      { $project: { _id: 1 } },
    ]);

    const locationIds = nearbyLocations.map((l) => l._id);
    console.log("📍 Nearby locations found:", locationIds.length);

    // STEP 2: RESTAURANTS FROM LOCATIONS
    const restaurants = await Restaurant.find({
      locationId: { $in: locationIds },
    }).populate("locationId");

    console.log("🍽 Restaurants found:", restaurants.length);

    // STEP 3: GENERATE REVIEWS ONLY IF NONE EXIST
    for (const r of restaurants) {

      

      if (!r.locationId) continue;
      console.log(r._id)

      const existingReview = await Review.findOne({ restaurantId: r._id });

      if (existingReview) {
        console.log(`⏩ Skipping ${r.name}, already has reviews`);
        continue;
      }

      const user = USERS[Math.floor(Math.random() * USERS.length)];
      const prompt = `
You are a Lahori Pakistani giving a casual restaurant review. 
Keep it under 2 lines, natural desi tone, not AI-like. 
Mention food experience briefly.

Restaurant: ${r.name}
Description: ${r.description || "N/A"}
Price Category: ${r.priceCategory || "Medium"}
Location: ${r.locationId.address}, ${r.locationId.city}
`;
      await new Promise(resolve => setTimeout(resolve, 2000));

      const text = await generateReview(prompt);

      const review = await Review.create({
        uid: user,
        restaurantId: r._id,
        text,
      });

      await Rating.create({
        reviewId: review._id,
        ...generateRating(),
      });

      console.log(`✔ Review created for: ${r.name}`);
    }

    console.log("✅ DONE: Reviews generated for restaurants without any");
    process.exit(0);
  } catch (err) {
    console.error("❌ ERROR:", err.response?.data || err.message);
    process.exit(1);
  }
};
