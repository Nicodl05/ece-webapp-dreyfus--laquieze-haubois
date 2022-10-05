
// Import a module

/*
// Declare an http server
 http.createServer(function (req, res) {

  // Write a response header
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Write a response content
  res.end('Hello World  My name is Nico');

// Start the server
})*/
 // Define a string constant concatenating strings
const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ECE AST</title>' +
'    </head>' + 
'    <body>' +
'       <p>Hello World!</p>' +
      '<p> Test de html </p>'
'    </body>' +
'</html>'
/*
const serverHandle = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(content);
  res.end();
}*/


/*
const serverHandle = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n my name is');
  res.end('My name is Nicolas');
}*/


/*const serverHandle = function (req, res) {
  // Retrieve and print the queryParams
  const queryParams = qs.parse(url.parse(req.url).query);
  console.log(queryParams);

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(content);
  res.end();
}*/
/*const serverHandle = function (req, res) {
  // Retrieve and print the current path
  const path = url.parse(req.url).pathname;
  console.log(path);

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(path);
  res.end();
}*/
// Import Node url module

const serverHandle = function(req,res){

}
const http = require('http')
const handles =require('./handles')
const server = http.createServer(handles.serverHandle);
server.listen(8080)