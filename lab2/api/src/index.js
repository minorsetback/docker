const express = require('express')

const app = express()

app.get('/test', (req, res) => {
    res.send('Its test message')
})

app.listen(8080, ()=>{
    console.log("Api work")
})