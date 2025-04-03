const express = require ('express'); //import express
const app = express(); // express is now ready to be used

//ejs is needed for rendering html (till now we did res.send)
// no need to require ejs like require('express');

app.set('view engine', 'ejs'); // other alternativs for ejs pugs, jade 


//middle ware : visualize it in action
//this middle ware will perform the following when a user tries to access any route, any route, whatever it is...!
app.use((req,res) => {
    console.log("user trying to access a route, whatever route it is. Now I middle ware will decide what to do");
    res.send("Haha, im middleware, im not going to send you to your desired route, you will be stuck and rot here, all say hail middleware, cause i decide what to do and where you should be sent");
})


app.get('/', (req,res) => {
    // res.send("Haha you are in '/' route");
    res.render('index');
})

app.listen(3000); // not mandatory to do this while using Express
