var http = require("http")

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/html'})

   // Send the response body as "Hello World"
   response.end('<!DOCTYPE html><html><body><h1>Hello From Jenkins Webhook - Manual Jenkins Build Repo</h1><h2>Modified this directly on GitHub</h2></body></html>')
}).listen(3333)

// Console will print the message
console.log('Server running')
