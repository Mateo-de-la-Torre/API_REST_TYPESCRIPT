import express from 'express' // ESmodules
// const express = require('express') -> commonjs (se compila en commonjs)

import diaryRoutes from './routes/diaries'

const app = express()
app.use(express.json())

const PORT = 3000
app.listen(PORT, () => {
  console.log(`%s listening at ${PORT}`)
})

app.use('/api/diaries', diaryRoutes)

app.get('/ping', (_req, res) => {
  console.log('hay alguien')
  res.send('pong')
})
