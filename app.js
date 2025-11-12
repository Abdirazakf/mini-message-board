const express = require('express')
const path = require('path')

const app = express()
const indexRoute = require('./router/indexRoute')

const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath))

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use('/', indexRoute)

app.listen(3000, (err) => {
    if (err) {
        console.log(err)
    }

    console.log("Server is running at localhost:3000")
})