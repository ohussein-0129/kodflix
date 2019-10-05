const express = require('express');
const app = express();
const fs = require("fs");
const path = require('path');
const port = process.env.PORT || 3001;
const mongo = require('./mongodb').mongo;

app.get('/rest/single/:id', (req, res) => {
    mongo.connectAndGetCollection()
    .then((collection) => {
        let result = mongo.getTheData(collection, req.params.id);
        return result;
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
        res.end('');
    });
});

app.get('/images/:id', function (req, res) {
    mongo.connectAndGetCollection()
    .then((collection) => {
        let result = mongo.getTheData(collection, req.params.id);
        return result;
    }, (err, client) => {
        client.close();
    })
    .then((data) => {
        if(data) {
            res.type('png');
            res.sendFile(path.join(__dirname,  './image/covers', `${req.params.id}.jpg`));
        }
    })
    .catch((err) => {
        res.end('');
    })
});

app.get('/wallpaper/:id', (req, res) => {
    res.sendFile(path.join(__dirname, './image/wallpaper', `${req.params.id}.jpg`));
});

//link to the index.html
app.use(express.static(path.join(__dirname, '../../build')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname,  '../../build', 'index.html'));
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));