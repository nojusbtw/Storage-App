import express from "express";
import fileRoutes from './routes/fileRoutes.js'
const app = express()
const port = 3000

app.get('/api/health', (req, res) => {
  res.send(JSON.stringify({ status: 'ok' }))
})

app.use('/api', fileRoutes);

export default app;