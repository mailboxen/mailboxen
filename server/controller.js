var fs = require('fs');

var parseConfig = function(obj){
  var result = [];
  var list = ["DOMAIN", "DNS", "AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"];
  for (var key in obj){
    if (list.indexOf(key) > -1){
      result.push(key + "=" + obj[key]);
    }
  }
  return result.join("\n");
};

module.exports.write = function(req, res) {
  var path = __dirname + 'config.txt';
  console.log('data', req.body);
  var data = parseConfig(req.body);
  fs.writeFile(path, data, function(err) {
    if (err) {
      console.log(err);
      throw err;
    }
    res.send(200, 'successfully wrote to the filesystem');
  });
};
