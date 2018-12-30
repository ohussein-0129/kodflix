const express = require('express');
const app = express();
const fs = require("fs");
const tvShows = require("./ShowsList");
const path = require('path');
const port = process.env.PORT || 3001;
const mongo = require('./mongodb').mongo;


//downloading movie data
// app.get('/rest/show', (req, res)=>{
//     res.type('json');
//     res.end(JSON.stringify(tvShows.tvShows));
// });

app.get('/rest/single/:id', (req, res) => {
    mongo.connectAndGetCollection()
    .then((collection) => {
        let res = mongo.getTheData(collection, req.params.id);
        return res;
    }, (err, client) => {
        client.close();
    })
    .then((data) => {
        res.type('json');
        res.end(JSON.stringify(data));
    }, (err, client) => {
        client.close();
    })
    .catch((err) => {
        console.log('There is a problem somewhere');
        res.end('');
    });
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

//link to the index.html
app.use(express.static(path.join(__dirname, '../../build')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname,  '../../build', 'index.html'));
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));