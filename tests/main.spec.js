/* eslint-disable */
const expect = require('chai').expect;
const exec = require('child_process').exec;
const btcConverter = 'node.exe ./src/main.js';

describe('Main CLI', () => {
  it('should return hello world ', (done) => {
    exec(btcConverter, (err, stdout, stderr) => {
      if(err) throw err;
      expect(stdout.replace('\n', '')).to.be.equal('Hello World!');
      done();
    });
  });
});
