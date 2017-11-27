'use strict';

const express = require('express');
const app = express();
const path = require('path');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

/*app.get('/outside', function (req, res) {out
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});*/

app.get('/office', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.use(express.static(__dirname + '/assets',
{ maxAge: 864000000}  // 10 days!
));


app.listen(app.get('port'), () => {
    console.log(`App listening on port ${app.get('port')}`);
});