var getHTML = require('./http-functions');
var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  var reverseHTML = html.split("").reverse().join("");
  console.log(reverseHTML);

}

getHTML(requestOptions, printUpperCase);