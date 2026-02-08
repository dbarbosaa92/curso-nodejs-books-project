const http = require('http'); //importa o modulo http

const port = 4000;

const server = http.createServer((req, res) => {
    res.write('Oi HTTP');
    res.end()
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})