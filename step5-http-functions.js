'use strict';
const https = require('https');

module.exports = function getHTML (options, callback) {

  https.get(options, function (res){
    res.setEncoding('utf8');

    let fullData = "";

    res.on('data', function (data) { //_cb when 'data' chunk is received
      fullData += data;
    });

    res.on('end', function() {
      callback(fullData);
      console.log('Response stream complete.');
    });
  });
};
