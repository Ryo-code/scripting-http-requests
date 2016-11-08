const https = require('https');

var getHTML = require('./step5-http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, getHTML);
