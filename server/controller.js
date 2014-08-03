var promise = require('bluebird');
var fs = promise.promisifyAll(require("fs"));
var xmlParser = require('xml2js');

var configPath = 'data/config.txt';
var xmlPath = 'data/log.xml';

var parseString = promise.promisify(new xmlParser.Parser().parseString);

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

var reverseParseConfig = function(string) {
  var arr = string.split('\n');
  var obj = {};
  var list = ["DOMAIN", "DNS", "AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"];
  arr.forEach(function(line){
    line = line.split('=');
    obj[line[0]] = line[1];
  });
  return obj;
};


module.exports.writeFile = function(req, res) {
  var data = parseConfig(req.body);
  console.log(data);
  // filepath === relative to the roote directory
  fs.writeFileAsync(configPath, data)
    .then(function(fullPath) {
      res.send('saved at' + fullPath);
    })
    .catch(function(err) {
      if (err) {
        console.log(err);
        throw err;
      }
    });
};

module.exports.isUser = function(req, res) {
  if (fs.existsSync(configPath)) {
    fs.readFileAsync(configPath, "utf-8")
      .then(reverseParseConfig)
      .then(function(result){
        res.status(200).send(result);
      })
      .catch(function(err) {
        console.log(err);
        res.send(err);
      });
  }else{
    res.status(404).send(null);
  }
};

module.exports.parseXml = function(req, res) {
  fs.readFileAsync(xmlPath)
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
