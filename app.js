const express = require('express');
const app = express();
const fs = require('fs');
//const path = require('path');
app.listen(3000, () => {
    console.log('RUN!')
});


//app.use(router);

app.use((req, res) => {
    if (req.url === '/') {
        res.end('Hello');
    } else if (req.url === '/img/:Lviv') {
        let cityImg = fs.readFileSync('./img/Lviv.png');
        res.end(cityImg); 
    } else if (req.url === '/img/:Odesa') {
        let cityImg = fs.readFileSync('./img/Odesa.jpg');
        res.end(cityImg); 
    } else {
        res.send(404, 'Page note found!');
    }
});



