const express = require('express');
const app = express();
const port =  4000

const path = require('path')

const users = require('./users')

//ler o body
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//arquivos estáticos (css, scripts, imagens)
app.use(express.static('public'))

const basePath = path.join(__dirname, 'templates') // caminho absoluto até a pasta templates

app.use('/users', users)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`) // aqui eu envio o arquivo html
})

app.use(function (req, res, next) {
    res.status(404).sendFile(`${basePath}/404.html`) // página de erro 404
})

app.listen(port, () => { // porta onde o servidor vai rodar
    console.log(`App rodando na porta ${port}`)
})

