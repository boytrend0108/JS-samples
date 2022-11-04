const express = require('express');
const fs = require('fs');
const app = express();
app.use('/', express.static('./public'));// при запросе к корню сайта отдаем содержимое public

//----------------------START SERVER--------------------------------------------
const port = process.env.PORT || 3000; // в port кладём или что-то из PORT или 3000
app.listen(port, () => {
    console.log(`Listening ${port} port`);
});