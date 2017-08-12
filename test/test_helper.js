import jsdom from 'jsdom';
import jquery from 'jquery';

// set up testing enviroment to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);
