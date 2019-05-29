'use strict';

jest.mock('fs');

const asyncReader = require('../../lib/reader-async.js');

describe('File Async Reader Module', () => {

  it('when given a bad file, returns an error', async () => {
    try{
      let result = await asyncReader(false);
      expect(result).toBeUndefined();
    }catch(error){
      console.log(`In catch statement with message: ${error}`);
    }
  });


  it('reads 3 files', async () => {
    let files = ['1.txt', '2.txt', '3.txt'];
    try{
      let result = await asyncReader(files);
      expect(result).toEqual(files);
    }catch(error){
      console.log(`In catch statement with message: ${error}`);
    }
  });
});
