'use strict'

const express = require('express')
const serveIndex = require('serve-index')
const app = express()
app.use('/', express.static(__dirname + '/src/'), serveIndex('src', {icons: true, stylesheet: 'public/style.css'}))
app.listen(8080)
