const express = require ('express'); //import express
const app = express(); // express is now ready to be used

//ejs is needed for rendering html (till now we did res.send)
// no need to require ejs like require('express');

app.set('view engine', 'ejs'); // other alternativs for ejs pugs, jade 


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

app.listen(3000); // not mandatory to do this while using Express
