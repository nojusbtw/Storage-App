import express from "express";
const app = express()
const port = 3000

app.get('/api/health', (req, res) => {
  res.send(JSON.stringify({ status: 'ok' }))
})

export default app;