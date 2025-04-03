const express = require ('express'); //import express
var morgan = require('morgan')

const app = express(); // express is now ready to be used

//ejs is needed for rendering html (till now we did res.send)
// no need to require ejs like require('express');

app.set('view engine', 'ejs'); // other alternativs for ejs pugs, jade 

// let the app use morgan now
app.use(morgan('dev'));
//now we are using morgan middleware in our app
//this will inform us of which route user visited what was response code how much time it took. 
// a sample output=> GET / 304 10.857 ms - - this means user visited / route with code 304 in 10.857 ms time


//middle ware : visualize it in action
//this middle ware will perform the following when a user tries to access any route, any route, whatever it is...!
app.use((req,res,next) => {
    
    console.log("You are in middleware now");
    
    //your middleware Logic can be written here if any
    const a = 2;
    const b = 3;
    console.log(a+b);

    //now finally let the user go to their desired route
    return next();
})

//apologies : I forgot to add next parameter in previous  commit, it should be there sorry.


app.get('/', (req,res) => {
    // res.send("Haha you are in '/' route");
    res.render('index');
})

//adding middleware only for a specific route


app.get('/customMiddleware', (req,res,next)=> {
    const a = 25;
    const b = 32;
    console.log(a+b);
    next() ; //this triggers it to go to the next part of this snippet, which is res.render()
}, (req,res) => {
    res.send('you have crossed middleware execution, this middleware logic is exclusive only for this route');
})

app.listen(3000); // not mandatory to do this while using Express
