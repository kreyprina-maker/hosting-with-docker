import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    message: mongoose.connection.readyState === 1
      ? 'Backend connected to MongoDB'
      : 'Backend running; database connection pending'
  })
})

app.get('/api/questions', (_req, res) => {
  res.json({
    message: 'Questions API is ready. We will connect this endpoint to MongoDB in the next development step.',
    questions: []
  })
})

const port = process.env.PORT || 5000
const mongoUri = process.env.MONGO_URI

if (mongoUri) {
  mongoose.connect(mongoUri)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error.message))
}

app.listen(port, '0.0.0.0', () => {
  console.log(`English Grammar Hub API running on port ${port}`)
})
