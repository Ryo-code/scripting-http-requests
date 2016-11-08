'use strict';
const https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response){
    console.log("Okay then...");

    response.setEncoding('utf8');

    response.on('data', function (data) { //_cb when 'data' chunk is received
      console.log('Chunk Received. Length:', data.length);
      console.log(data);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });
}

getAndPrintHTMLChunks();
