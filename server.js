const express = require('express')
const app = express()



app.set('view engine', 'pug')
app.use(express.static('public'))



require('./app/routes/main.js')(app)

app.listen(3000)