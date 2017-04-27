/**
 * Created by Nimra Riaz on 4/27/2017.
 */

//Simple Root Server
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Express Server is Active!')
});

app.listen(8000, function () {
    console.log('Example app listening on port 8000!')
});