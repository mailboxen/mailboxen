var bodyParser = require('body-parser');
var morgan = require('morgan');
var controller = require('./controller.js');

module.exports = function(app, express) {
  // app.use(controller.checkConfig);
  app.use(express.static(__dirname + '/../client'));
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(bodyParser.json());
  app.post('/config', controller.writeFile);
  app.get('/setting', controller.navigateToSetting)
};
