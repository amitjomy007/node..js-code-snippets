const http = require('http');


//creates a server, callback whenever there is a request and executes res
const server = http.createServer((req,res) => { 
    

    console.log(req.url); // example : localhost:3000/about this line of code will print /about
    //so how to route?

    if(req.url=="/about"){
        res.end("You are in the about page");
    }
    else {
        res.end("Error 404 not found");
    }
    
});
//whenever user visits website Hello world will appear 


//create the server at port 3000
server.listen(3000);