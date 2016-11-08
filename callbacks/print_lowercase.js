'use strict';
const https = require('https');
const getHTML = require('../step5-http-functions');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {
  let output = html.toLowerCase();
  console.log(output);

}

getHTML(requestOptions, printLowerCase);
