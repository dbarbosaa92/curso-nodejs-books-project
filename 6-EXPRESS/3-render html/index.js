const express = require('express');
const app = express();
const port =  3000

const path = require('path')

const basePath = path.join(__dirname, 'templates') // caminho absoluto até a pasta templates

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`) // aqui eu envio o arquivo html
})

app.listen(port, () => { // porta onde o servidor vai rodar
    console.log(`App rodando na porta ${port}`)
})