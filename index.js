const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Testando Umbler! Hello wolrd :D')
})

app.listen(3000, () => {
    console.log('Running server on 3000')
})