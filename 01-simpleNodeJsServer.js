var http = require('http') //  Require is a module with easiest way to include modules that exist in separate file
var port = 7000

var requestHandler = (request, response) => {
    console.log(request.url)
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<!DOCTYPE html>");
    response.write("<html>");
    response.write(`
        <head>
            <title>Basic Server Example</title>
        </head>
        <body>
        <h1> Hello Nimra Riaz !!!!</h1>
        </body>
    `);
    response.write("</html>");
}

var server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})