const express = require('express')
const toolsRouter = require('./router/v1/tools.router')
const app = express()
const port = process.env.PORT || 5000
require('./app')
var cors = require('cors')
const { viewCount } = require('./middleware/viewCounts')
const { limiter } = require('./middleware/limitter')
const { errorHandle } = require('./middleware/errorHandle')

app.use('/api/v1', toolsRouter)
app.get('/', (req, res) => {
    // res.send('Hello world')
    // ejs file all time views file a access thake tai view file a sudu name ta dile i hobe
    res.render('dynamic.ejs', {name: 'hridoy'})
  })

app.all('*', (req, res, next) => {
    res.send("Not Found | 404")
})

// errorHandle middleware
app.use(errorHandle)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// error ja express handle korte partese na(jamon database related error)
process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message)
  app.close(() => {
    process.exit(1)
  })
})