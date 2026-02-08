const http = require('http'); //importa o modulo http

const port = 4000;//define a porta onde o servidor vai rodar

const server = http.createServer((req, res) => { //cria o servidor (localhost)
   res.statusCode = 200; //
   res.setHeader('Content-Type', 'text/html'); //define o tipo de conteudo que o servidor vai retornar
   res.end(`<h1>Olá, este ''e o meu primeiro server com HTML!</h1><p>atualizando</p>`);
})

server.listen(port, () => { //coloca o servidor para rodar na porta definida
    console.log(`Servidor rodando na porta ${port}`);
})