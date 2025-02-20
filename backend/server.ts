import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config() // Load environment variables

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Backend is running...')
})

const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
