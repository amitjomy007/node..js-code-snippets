const express = require ('express'); //import express

const app = express(); // express is now ready to be used

app.get('/', (req,res) => {
    res.send("Haha you are in '/' route");
})

app.listen(3000); // not mandatory to do this while using Express
