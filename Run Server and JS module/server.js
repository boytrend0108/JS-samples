const express = require('express');// connect express
const fs = require('fs');// connect fs
const app = express();// run express
app.use('/', express.static('./public'));// при запросе к корню сайта отдаем содержимое public

//----------------------START SERVER--------------------------------------------
const port = process.env.PORT || 3000; // в port кладём или что-то из PORT или 3000
app.listen(port, () => {
    console.log(`Listening ${port} port`);
});