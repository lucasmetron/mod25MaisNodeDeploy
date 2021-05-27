const express = require('express');
const app = express();


require('dotenv').config();

let port = process.env.PORT

app.get('/', (req, res) => {
    res.send('<h1>Testando Umbler! Hello wolrd :D')
})

app.listen(3000, () => {
    console.log(process.env.API_KEY)
    console.log(`Running server on ${port}`)
})