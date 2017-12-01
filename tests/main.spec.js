/* eslint-disable */
const expect = require('chai').expect;

const exec = require('child_process').exec;
const btcConverter = 'node.exe ./src/main.js';
const pkg = require('../package.json');

describe('Main CLI', () => {
  it('should return the version of btc-converter ', (done) => {
    exec(`${btcConverter} --version`, (err, stdout, stderr) => {
      if(err) throw err;
      expect(stdout.replace('\n', '')).to.be.equal(pkg.version);
      done();
    });
  });
});
