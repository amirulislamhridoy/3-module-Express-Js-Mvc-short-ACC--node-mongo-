const express = require('express')
const toolsRouter = require('./router/v1/tools.router')
const app = express()
const port = process.env.PORT || 5000
var cors = require('cors')
const { viewCount } = require('./middleware/viewCounts')
const { limiter } = require('./middleware/limitter')

// middlewares
// core middler
app.use(cors())
// building middleware
app.use(express.json())
// application label middleware
// app.use(viewCount)
// router label middleware => now in tools.counter
// third parth middleware
// app.use(limiter)

// send static files
app.use(express.static('public'))

// view engine
app.set("view engine", "ejs");

app.use('/api/v1', toolsRouter)

app.get('/', (req, res) => {
    // res.send('Hello world')
    // ejs file all time views file a access thake tai view file a sudu name ta dile i hobe
    res.render('dynamic.ejs', {name: 'hridoy'})
  })

app.all('*', (req, res, next) => {
    res.send("Not Found | 404")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})