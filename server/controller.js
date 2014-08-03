var promise = require('bluebird');
var fs = promise.promisifyAll(require("fs"));
var xmlParser = require('xml2js');
var Ansible = require('node-ansible');

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

var reverseParseConfig = function(string) {
  var arr = string.split('\n');
  var obj = {};
  var list = ["DOMAIN", "DNS", "AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"];
  arr.forEach(function(line) {
    line = line.split('=');
    obj[line[0]] = line[1];
  });
  console.log(obj);
  return obj;
};


var executeAnsible = function() {
  var command = new Ansible.AdHoc().module('shell').hosts('local').args("echo 'hello'");
  command.exec();
};

var parseString = promise.promisify(new xmlParser.Parser().parseString);
var executeAnsible = promise.promisify(executeAnsible);

module.exports.writeFile = function(req, res) {
  var data = parseConfig(req.body);
  // filepath === relative to the roote directory
  fs.writeFileAsync(configPath, data)
    .then(function(fullPath) {
      // executeAnsible();
      res.status(201).send('saved at' + fullPath);
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
      .then(function(result) {
        console.log('hello');
        var output = reverseParseConfig(result);
        res.json(output);
      })
      .catch(function(err) {
        res.send(err);
      });
  }
  // else {
  //   res.status(404).send(null);
  // }
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
