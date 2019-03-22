'use strict'
var fs = require("fs");

/***
 * implementation of readFileSync
 */
var data = fs.readFileSync('index.html');
console.log(data.toString());
console.log("Program Ended");

/***
 * implementation of readFile
 */

fs.readFile('index.html', function (err, data) {
    if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");
