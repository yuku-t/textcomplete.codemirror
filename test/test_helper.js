const sinon = require('sinon');

beforeEach(function () {
  this.sinon = sinon.sandbox.create();
});

afterEach(function () {
  this.sinon.restore();
});
