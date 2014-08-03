var fs = require('fs');
var configFilePath = 'config.txt';

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
  if (fs.existsSync(configFilePath)) {
    res.redirect('/setting');
  }
  next();
};

module.exports.writeFile = function(req, res) {
  var data = parseConfig(req.body);
  // filepath === relative to the roote directory
  fs.writeFile(configFilePath, data, function(err) {
    if (err) {
      console.log(err);
      throw err;
    }
    res.redirect('/setting');
  });
};

module.exports.navigateToSetting = function(req, res){

};