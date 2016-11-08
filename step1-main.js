'use strict';
const https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (res){
    console.log("Okay then...");

    res.setEncoding('utf8');

    res.on('data', function (data) { //_cb when 'data' chunk is received
      console.log('Chunk Received. Length:', data.length);
      console.log(data);
    });

    res.on('end', function() {
      console.log('Response stream complete.');
    });

  });
}

getAndPrintHTMLChunks();
