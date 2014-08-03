var promise = require('bluebird');
var fs = require('fs');
var xmlParser = require('xml2js');

var configPath = 'data/config.txt';
var xmlPath = 'data/log.xml';

var parseConfig = function(obj) {
  var result = [];
  var list = ["DOMAIN", "DNS", "AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"];
  for (var key in obj) {
    if (list.indexOf(key) > -1) {
      result.push(key + "=" + obj[key]);
    }
  }
  return result.join("\n");
};

module.exports.checkConfig = function(req, res, next) {
  if (fs.existsSync(configPath)) {
    res.redirect('/setting');
  }
  next();
};

module.exports.writeFile = function(req, res) {
  var data = parseConfig(req.body);
  // filepath === relative to the roote directory
  fs.writeFile(configPath, data, function(err) {
    if (err) {
      console.log(err);
      throw err;
    }
    res.redirect('/setting');
  });
};

module.exports.navigateToSetting = function(req, res){

};

module.exports.parseXml = function(req, res) {
  var readFile = promise.promisify(fs.readFile);
  var parseString = promise.promisify(new xmlParser.Parser().parseString);
  readFile(xmlPath)
    .then(parseString)
    // some option is needed to prune the raw log
    .then(JSON.stringify)
    .then(function(result) {
      res.send(200, result);
    })
    .catch(function(err) {
      console.log(err);
    });
};
