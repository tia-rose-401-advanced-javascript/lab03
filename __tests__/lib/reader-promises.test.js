'use strict';

jest.mock('fs');

const readerPromises = require('../../lib/reader-promises.js');

describe('File Reader Promise Module', () => {

  it('when given a bad file, returns an error', done => {
    let files = ['bad.txt'];
    return readerPromises(files)
      .then()
      .catch(error => expect(error).toBeDefined());
  });


  it('reads 3 files', done => {
    let files = ['1.txt', '2.txt', '3.txt'];
    return readerPromises(files)
      .then(result => {
        expect(result).toEqual(files);
      });
  });
});
