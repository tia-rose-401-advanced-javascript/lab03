'use strict';

jest.mock('fs');

const readerPromises = require('../../lib/reader-promises.js');

describe('File Promises Reader Module', () => {

  it('should return an error if given a bad file', () => {
    let files = ['bad.txt'];

    return readerPromises(files)
      .then()
      .catch(err => expect(err).toBeDefined());
  });



  it('reads 3 files', () => {
    let files = ['File Contents', 'File Contents', 'File Contents'];

    return readerPromises(files)
      .then(result => {
        expect(result).toEqual(files);
      });
  });
});