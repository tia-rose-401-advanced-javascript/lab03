'use strict';

jest.mock('fs');

const readerPromises = require('../../lib/reader-promises.js');

describe('File Reader Promise Module', () => {

  it('when given a bad file, returns an error', done => {
    let files = ['bad.txt'];
    // In jest, throwing errors obviously kills the app, so if you're
    // going to throw one in a test, have the expect execute your code as a
    // function so that you can trap it.
    readerPromises(files, (err,data) => {
      expect(err).toBeDefined();
      done();
    });
  });


  it('reads 3 files', done => {
    let files = ['file1.txt', 'file2.txt', 'file2.txt'];
    readerPromises(files, (err,data) => {
      expect(err).toBeNull();
      expect(data instanceof Array ).toBeTruthy();
      expect(data.length ).toBe(3);
      done();
    });
  });

});
