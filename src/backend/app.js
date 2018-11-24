const express = require('express');
const app = express();
// const fs = require("fs");
const tvShows = require("./ShowsList");
const path = require('path');
const imageRes = require('./image/ResolveID');
const port = process.env.PORT || 3001;

app.get('/rest/show', (req, res)=>{
    
    res.type('json');
    res.end(JSON.stringify(tvShows.tvShows));
});

// app.get('/image/:id', (req, res)=> {
//     console.log(`the param is ${req.params.name}`);
// });

app.use(express.static(path.join(__dirname, './image/covers')));
app.get('/images/:name', function (req, res) {
    res.sendFile(path.join(__dirname,  './image/covers', `${req.params.name}.jpg`));
});

app.use(express.static(path.join(__dirname, '../../build')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname,  '../../build', 'index.html'));
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));