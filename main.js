//require functions are used like #includes from C/C++.
var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){

    //if you look up on the properties of this, _url is a string.
    var _url = request.url;

    //this parse function from pakage url.
    //it takes a string and parses it. return it as 'parsed' URL object. no idea what it is.
    //query is thus one of the fields of Object URL.
    var queryData = url.parse(_url, true).query;


    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
 
});
app.listen(3000);