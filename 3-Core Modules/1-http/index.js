const http = require('http'); //importa o modulo http

const port = 4000;//define a porta onde o servidor vai rodar

const server = http.createServer((req, res) => { //cria o servidor (localhost)
    res.write('Oi HTTP');
    res.end()
})

server.listen(port, () => { //coloca o servidor para rodar na porta definida
    console.log(`Servidor rodando na porta ${port}`);
})