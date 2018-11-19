const express = require('express')
const app = express()
const fs = require("fs")
const tvShows = require("./ShowsList");
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/rest/show', (req, res)=>{
    res.send(JSON.stringify(tvShows));
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))