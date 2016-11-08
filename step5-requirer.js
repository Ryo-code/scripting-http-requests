'use strict';
const https = require('https');
const getHTML = require('./step5-http-functions');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function showMeTheDATA(data){
  console.log(data);
}

getHTML(requestOptions, showMeTheDATA);
