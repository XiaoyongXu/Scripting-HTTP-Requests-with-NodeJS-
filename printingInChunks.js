var https = require('https');


function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  var callback = function(response) {
    console.log('In response handler callback!');
  
    response.on('data', function(chunk) {
      console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
      console.log('chunk: '+ chunk);
    });
  }
  
  console.log("I'm about to make the request!");
  
  https.request(requestOptions, callback).end();
  
  console.log("I've made the request!");

}

getAndPrintHTMLChunks ();