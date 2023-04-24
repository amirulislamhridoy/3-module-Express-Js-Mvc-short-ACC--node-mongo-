const express = require('express')
var cors = require('cors')
const app = express()

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
