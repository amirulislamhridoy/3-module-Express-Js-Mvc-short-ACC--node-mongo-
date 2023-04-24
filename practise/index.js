const express = require('express')
const app = express()
const port = process.env.PORT || 5000
require('./app')
const toolsRouter = require('./router/v1/tools.router')

app.use('/api/v1', toolsRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("*", (req, res) => {
    res.send('404 | not found page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})