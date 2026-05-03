const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')
const mongodbConfig = require('./infrastructure/database/mongodb/config/db')
const authRoute = require('./interfaces/routes/authRoute')
const userRoute = require('./interfaces/routes/userRoute')
const restRoute = require('./interfaces/routes/restaurantRoute')
const saveRoute = require('./interfaces/routes/saveRoute')
const likeRoute = require('./interfaces/routes/likeRoute')
const reviewRoute= require('./interfaces/routes/reviewRoute')
const { verifyAuth } = require('./interfaces/middlewares/authMiddleware')
const cookieParser = require('cookie-parser');


dotenv.config()

const app = express()

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

app.use(express.json())
app.use(cookieParser())
app.listen(3000, () => { console.log('Server Started') })

mongodbConfig.connectDB()


app.use('/auth', authRoute)
app.use('/user', userRoute)
app.use('/restaurant', restRoute)
app.use('/save', saveRoute)
app.use('/like', likeRoute)
app.use('/reviews',reviewRoute)
