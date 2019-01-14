function getAndPrintHTML (options) {
  var https = require('https');
  var body = [];
  var callback = function(response) {
    
    response.setEncoding('utf-8')
    response.on('data', function(chunk) {
      body.push(chunk);
      
    });
    
  }
  
  https.request.end(body,function(){
    console.log(body);
  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


getAndPrintHTML(requestOptions);