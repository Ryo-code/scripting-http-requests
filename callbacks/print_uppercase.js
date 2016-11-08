'use strict';
const https = require('https');
const getHTML = require('../step5-http-functions');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  let output = html.toUpperCase();
  console.log(output);
}

getHTML(requestOptions, printUpperCase);
