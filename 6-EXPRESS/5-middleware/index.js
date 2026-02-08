const express = require('express');
const app = express();
const port =  3000

const path = require('path')

const basePath = path.join(__dirname, 'templates') // caminho absoluto até a pasta templates

// middleware - uma função que é executada antes de chegar na rota
const checkAuth = function (req, res, next) {
    req.authStatus = false // adiciona uma propriedade ao objeto req

    if(req.authStatus) {
        console.log('Está logado, pode continuar')
        next() // chama a próxima função (a rota)
    } else {
        console.log('Não esta logado, faça o login para continuar')
        next()
    }
}

app.use(checkAuth) // usando o middleware em todas as rotas

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`) // aqui eu envio o arquivo html
})

app.listen(port, () => { // porta onde o servidor vai rodar
    console.log(`App rodando na porta ${port}`)
})