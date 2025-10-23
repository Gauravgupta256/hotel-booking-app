import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import cors from 'cors'
import { clerkMiddleware } from '@clerk/express'
import connectDB from './configs/db.js'
import clerkWebhooks from './controllers/clerkWebhooks.js'

connectDB();
const app = express()

//enable frontend to connect backend
app.use(cors())

// middleware
app.use(express.json())
app.use(clerkMiddleware())

// api to listen to clerk webhooks
app.use('/api/clerk' , clerkWebhooks)

app.get('/', (req, res) => {
    res.send("API is Working...");
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on PORT : ${PORT}`);
})