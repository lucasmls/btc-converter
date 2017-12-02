/*eslint-disable */
const nock = require('nock');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;

chai.use(sinonChai);

const convertBTC = require('../src/ConvertBTC');

describe('ConvertBTC', () => {
  let consoleStub;

  const responseMock = {
    "success": true,
    "price": 10943.91,
    "time": "2017-12-02 01:00:31"
  };

  beforeEach(() => {
    consoleStub = sinon.stub(console, 'log');
  });

  afterEach(() => {
    console.log.restore();
  });

  it('should use currency USD and 1 as default amount', (done) => {
    //https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=USD&amount=1
    nock('https://apiv2.bitcoinaverage.com')
        .get('/convert/global')
        .query({from: 'BTC', to: 'USD', amount: '1'})
        .reply(200, responseMock);

    convertBTC();

    setTimeout(() => {
      expect(consoleStub).to.have.been.calledWith('1 BTC to USD = 10943.91');
      done();
    }, 300);
  });

  it('should use currency USD and 10 as amount', (done) => {
    //https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=USD&amount=1
    nock('https://apiv2.bitcoinaverage.com')
        .get('/convert/global')
        .query({from: 'BTC', to: 'USD', amount: '10'})
        .reply(200, responseMock);

    convertBTC('USD', 10);

    setTimeout(() => {
      expect(consoleStub).to.have.been.calledWith('10 BTC to USD = 10943.91');
      done();
    }, 300);
  });
});
