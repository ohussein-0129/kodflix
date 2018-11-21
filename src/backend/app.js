const express = require('express');
const app = express();
// const fs = require("fs");
const tvShows = require("./ShowsList");
const path = require('path');
const port = process.env.PORT || 3001;


app.get('/main', function (req, res) {
    res.sendFile(path.join(__dirname,  '../../public', 'index.html'));
});

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/rest/show', (req, res)=>{
    res.type('json');
    res.end(JSON.stringify(tvShows.tvShows));
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));