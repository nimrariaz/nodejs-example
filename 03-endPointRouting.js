/**
 * Created by Nimra Riaz on 4/27/2017.
 */


app.route('/test')
    .get(function (req, res) {
        // Handle request
        res.send('Express /test get Server is Active!');
        console.log('/test');
    })
    .post(function (req, res) {
        // Handle request
        res.send('Express /test get Server is Active!');
        console.log('/test');
    });

app.route('/crore')
    .get(function (req, res) {
        console.log('/crore');
        // Handle request
        res.send('Express /crore get Server is Active!');
        console.log('/crore');
    });

app.route('/login')
    .post(function (req, res) {
        var user_name = req.body.user;
        var password = req.body.password;
        console.log('Name = ' + user_name + ',Password is ' + password);
        // res.end('Data Sent to server..');
    });


app.listen(8000, function () {
    console.log('Server listening on port 8000!')
});