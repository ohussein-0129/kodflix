const express = require('express');
const app = express();
// const fs = require("fs");
const tvShows = require("./ShowsList");
const path = require('path');
const port = process.env.PORT || 3001;

app.get('/rest/show', (req, res)=>{
    res.type('json');
    res.end(JSON.stringify(tvShows.tvShows));
});

app.use(express.static(path.join(__dirname, '../../build')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname,  '../../build', 'index.html'));
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));