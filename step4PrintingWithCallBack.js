
function getHTML (options, callback) {
  var https = require('https');
  var body = '';
  /* Add your code here */
  https.get(options, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');
  
    // the callback is invoked when a `data` chunk is received

    response.on('data', function(chunk) {
      body += chunk;
    });
  
    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function(){
      printHTML (body);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);