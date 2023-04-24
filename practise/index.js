const express = require('express')
const app = express()
const port = process.env.PORT || 5000
var cors = require('cors')
var bodyParser = require('body-parser')
const toolsRouter = require('./router/v1/tools.router')
const { viewCount } = require('./middleware/viewCount')
const limiter = require('./middleware/rateLimitMiddleware')
const errorHandle = require('./middleware/errorHandle')

// middlewares
app.use(cors())
// app.use(express.json())
app.use(bodyParser.json())
// app.use(express.static('public'))
app.set('view-engine', 'ejs')
// application label middleware
// app.use(viewCount)
// third party middleware
// app.use(limiter)

app.use('/api/v1', toolsRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
  // res.download("./public/travel-girl.jpg") // it don't work (if I use this app.use(express.static()))
})
app.get('/redirect', (req, res) => {
  res.redirect('/login')
})
app.get('/ejs', (req, res) => {
  res.render('dynamic.ejs', { user: { name: 'a' } })
})
app.get("*", (req, res) => {
  undefined.name
  res.send('404 | not found page')
})

// default global error handler middleware in express js
app.use(errorHandle)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

process.on('unhandledRejection', (error) => {
  console.log(error.message, error.code)
  app.close(() => {
    process.exit(1)
  })
})