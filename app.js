const express = require("express")
const app = express()

app.get('/', (req, res) => {
    res.json("Hello World")
})

app.listen(8080,  () => {
    console.log("Server listen en the port 8080!");
})