'use strict';
const https = require('https');
// const streamBuffers = require('stream-buffers');


function getAndPrintHTML (options) {
  https.get(options, function (res){
    res.setEncoding('utf8');

    let fullData = "";

    res.on('data', function (data) { //_cb when 'data' chunk is received
      fullData += data;
      // console.log(data);
      // console.log('Chunk Received. Length:', data.length);
      console.log("Test");
    });

    res.on('end', function() {
      console.log(fullData);
      console.log('Response stream complete.');
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


getAndPrintHTML(requestOptions);
