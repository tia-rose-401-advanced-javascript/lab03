'use strict';

const fs = require('fs');

/**
 * Our module exports a single function that expects an array of files
 * @type {function(*=)}
 */
module.exports = exports = (files) => {
  return readAll([...files]);
};

let refactorProm = (data) => {
  return new Promise((resolve, reject) => {
    if(data) {resolve(data);}
    else{ reject('Bad');}
  });
};

let handlePromiseResolve = (data) => {
  console.log(data);
  return refactorProm(data);
}

/**
 * This wraps the fs module, primarily so that we can more easily write tests around it.
 * @param file
 * @param callback
 */
const readOne = (file, callback) => {
  return new Promise((resolve, reject) => {
    fs.readFile( file, (err, data) => {
      if(err) { reject(err); }
      else { 
        resolve(data);
      };
    })
  })
};

/**
 * Reads and returns the contents of 3 files
 * Requires 3 paths, otherwise, it'll fail with aggression
 * @param paths
 */


 //Adam's refactor - remove contents above
const readAll = (paths) => {

  let contents = [];

  readOne(paths[0])
    .then(data => {
      contents.push(data.trim());
      return readOne(paths[1]);
    })
    .then(data => {
      contents.push(data.trim());
      return readOne(paths[2])
    })
    .then(data => {
      contents.push(data.trim());
      return contents
    })
    .catch(error => {throw error; });



    //My feeble attemplt

  readOne(paths[0], (err, data) => {
    if (err) {
      callback(err);
    }
    else {
      console.log('Read File 1');
      contents.push(data.toString().trim());
      console.log(contents);
    }

    readOne(paths[1], (err, data) => {
      if (err) {
        callback(err);
      }
      else {
        console.log('Read File 2');
        contents.push(data.toString().trim());
        console.log(contents);
      }
      readOne(paths[2], (err, data) => {
        if (err) {
          callback(err);
        }
        else {
          console.log('Read File 3');
          contents.push(data.toString().trim());
          console.log(contents);
        }
      });
    });
  });
  callback(null, contents);
};

refactorProm(data)
  .then(handlePromiseResolve)
  .catch(console.error);
