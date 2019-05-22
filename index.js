'use strict';

const fileReader = require('./lib/reader.js');


let args = process.argv;

if(args.length < 2){
  console.error('Not enough args');
  return;
}
let sourceFile = args[2];
let destFile = args[3];
let operation = args [4];


for(let i = 0; i < args.length; i++){
  console.log(args[i]);
}

// let file = `${__files}/test.txt`;
// console.log(file);

// let myattempt = (error, data) => {
//   if(error) {throw error;}
//   console.log(data)
// };

// try{
//   fileReader(file, myattempt);
// }catch(e){
//   console.error(e);
// }


// // Obtain and assert input
// let files = process.argv.slice(2);

// if( ! (files instanceof Array && files.length) ) {
//   throw new Error('Invalid Args');
// }

// fileReader(files, (err,data) => {
//   if ( err ) { throw err; }
//   console.log('From Callback:', data);
// });
