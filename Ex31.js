var fs = require('fs');
fs.appendFile('uki coding school',
function (err){
if (err) throw err;
console.log('saved!');
});
