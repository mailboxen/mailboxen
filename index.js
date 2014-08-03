var app = require('./server/server');
var port = process.env.PORT || 8000;
app.listen(port);
console.log('the server is listening to ' + port);
