var bodyParser = require('body-parser');
var morgan = require('morgan');
var fileController = require('./controller.js');

module.exports = function(app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

  app.use(express.static(__dirname + '/../client'));
  app.post('/config', fileController.write);

};
