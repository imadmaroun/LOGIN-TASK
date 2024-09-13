const express = require("express")
const app = express()
app.use(express.json())
require("dotenv").config()
const PORT = process.env.PORT || 3030


const LogIn = require('./Routes/LogIn')
const Auth = require('./Routes/Auth')
//app.use(LogIn)
app.use(Auth)

app.listen(PORT, () => {
    console.log(`App is listening on Port ${PORT}`);
})