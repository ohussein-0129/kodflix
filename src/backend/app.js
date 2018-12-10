const express = require('express');
const app = express();
const fs = require("fs");
const tvShows = require("./ShowsList");
const path = require('path');
const port = process.env.PORT || 3001;

//downloading movie data
app.get('/rest/show', (req, res)=>{
    res.type('json');
    res.end(JSON.stringify(tvShows.tvShows));
});

app.get('/images/:id', function (req, res) {
    let imageExists = tvShows.tvShows.find((tvShow) => tvShow.id === req.params.id);
    if(!imageExists){
        res.end('');
    }
    else{
        res.type('png');
        res.sendFile(path.join(__dirname,  './image/covers', `${req.params.id}.jpg`));
    }
});

//this links to the react application
app.use(express.static(path.join(__dirname, '../../build')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname,  '../../build', 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));