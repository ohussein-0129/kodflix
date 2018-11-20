const express = require('express')
const app = express()
const fs = require("fs")
const tvShows = require("./ShowsList");
const port = 3001;

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/rest/show', (req, res)=>{
    res.type('json');
    res.end(JSON.stringify(tvShows.tvShows));
    
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))