'use strict'

const fs = require('fs');

var random = Math.random();

fs.readFile('./files/test.txt', 'utf8', (error, data) => {
  if(error) throw error;
  console.log(`reading ${data}`);
  console.log(data.length);
});

fs.writeFile('./files/test.txt', `${random}`, (error) => {
  if (error) throw error;
  console.log(`writing ${random}`);
});





// let fileReader = (file, callback) => {
//   fs.readFile(file, (error, data) => {
//     if(error) callback(error);
//     else{callback(null, data.toString().trim());}
//   });
// }

// module.exports = exports = fileReader