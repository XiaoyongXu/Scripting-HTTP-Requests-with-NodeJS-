


function getAndPrintHTMLChunks () {
  var https = require('https');
  var body = [];
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  
  var callback = function(response) {
    
    response.setEncoding('utf-8')
    response.on('data', function(chunk) {
      body.push(chunk);
      console.log('body:'+ body);
    });
    
  }
  

  

  
  https.request(requestOptions, callback).end();
  
  
  return body;
}

getAndPrintHTMLChunks ();