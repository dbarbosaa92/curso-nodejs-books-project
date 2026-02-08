const fs = require('fs')
const http = require('http')
const url = require('url')

const port = 3000
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(
        '<h1>Bem-vindo ao meu primeiro projeto em Node.js</h1>'
    )
})


server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
}) 