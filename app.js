const express = require ('express'); //import express
const app = express(); // express is now ready to be used

//ejs is needed for rendering html (till now we did res.send)
// no need to require ejs like require('express');

app.set('view engine', 'ejs'); // other alternativs for ejs pugs, jade 



app.get('/', (req,res) => {
    // res.send("Haha you are in '/' route");
    res.render('index');
})

app.listen(3000); // not mandatory to do this while using Express
