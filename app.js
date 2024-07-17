const express = require('express')
const transactionRouter = require("./controllers/transactionsControllers")
// Create an instance of the express server
const app = express()
const cors = require("cors")


app.use(express.json())
app.use(cors())

app.use('/logs', transactionRouter)

// Home Route
app.get('/', (req, res) => {
    res.send(`welcome to the captain's log`)

})


// Route
app.get('/logs', (req, res) => {
    re(`welcome `)
})



module.export = app