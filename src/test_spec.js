var jsdom = require('jsdom');
var document = new jsdom.JSDOM('', {});
global.window = document.window;

var sinon = require('sinon');

describe('Whatever class', () => {
  let _clock = null;

  beforeEach(() => {
    _clock = sinon.useFakeTimers();
  });

  afterEach(() => {
    _clock.restore();
  });

  it('does whatever', () => {
    console.log('passes');
  });
});
