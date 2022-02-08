const express = require('express')
const PORT = 5000

const app = express()

const customMiddlWare = (req,res, next) => {
    console.log("This is a middleware")
    next()
}

app.use(customMiddlWare)

app.get('/about',(req,res) => {
    console.log("This is about ")
    res.json({message: "About"})
})

app.get('/test',(req,res) => {
    console.log("This is test")
    res.json({message: "Test"})
})




app.listen(PORT, () => {
    console.log(`Server runs on ${PORT}`)
})