const express = require('express');
const app = express()
const port = 4500;
const calc = require('./routes/calc')

app.use(express.static(__dirname + "/public"))
app.use(calc)

app.listen(port, () => {
    console.log('server berjalan di port http://localhost:' + port)
})
