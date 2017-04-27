/**
 * Created by Nimra Riaz on 4/27/2017.
 */
var app = require('express')();
var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.route('/users/:userID')
    .get(function (req, res) {
        // Handle request
        console.log('users API', req.params.userID);
        res.send('Express get Server is Active!');
    })
    .post(function (req, res) {
        // Handle request
        var user_name = req.body.user;
        var password = req.body.password;
        console.log('Name = ' + user_name + ',Password is ' + password);
    });

app.listen(8000, function () {
    console.log('Server listening on port 8000!')
});