'use strict';
const https = require('https');
const getHTML = require('../step5-http-functions');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function reverse (html) {
  let output = html.split("").reverse().join("");
  console.log(output);
}

getHTML(requestOptions, reverse);
