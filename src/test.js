var jsdom = require('jsdom');
var document = new jsdom.JSDOM('', {windowOptions: {runScripts: 'outside-only'}});
global.window = document.window;

var sinon = require('sinon');

let _clock = null;
_clock = sinon.useFakeTimers();
_clock.restore();
console.log('passes');
