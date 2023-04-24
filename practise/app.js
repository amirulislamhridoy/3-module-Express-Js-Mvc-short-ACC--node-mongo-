const express = require('express')
const app = express()
var cors = require('cors')
var bodyParser = require('body-parser')

// middlewares
app.use(cors())
// app.use(express.json())
app.use(bodyParser.json())