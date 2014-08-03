var bodyParser = require('body-parser');
var morgan = require('morgan');
var controller = require('./controller.js');

module.exports = function(app, express) {
  app.use(express.static(__dirname + '/../client'));
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(bodyParser.json());
  app.use(controller.parseXml);
  app.get('/user', controller.isUser);
  app.post('/config', controller.writeFile);
};
