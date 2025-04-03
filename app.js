const http = require('http');


//creates a server, callback whenever there is a request and executes res
const server = http.createServer((req,res) => { 
    res.end('Hello world  ');
    
});
//whenever user visits website Hello world will appear 


//create the server at port 3000
server.listen(3000);