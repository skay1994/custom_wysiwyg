process.title = 'MyWebServer';
let args = process.argv,
port = args[2] || 7070,
webServer = require('./server');

webServer.listen(port, function() {
    console.log('Server started at port ' + port);
});