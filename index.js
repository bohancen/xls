var xlsx = require('node-xlsx');
var fs = require('fs');

var obj = xlsx.parse("./data.xls");
console.log(JSON.stringify(obj));

var buffer = xlsx.build(obj);
fs.writeFile('./resut.xls', buffer, function (err){
  if(err){
    console.log(err)
  }
  console.log('ok')
})