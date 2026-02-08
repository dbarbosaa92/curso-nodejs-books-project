const http = require('http'); //importa o modulo http
const fs = require('fs'); //importa o modulo fs

const port = 4000;//define a porta onde o servidor vai rodar

const server = http.createServer((req, res) => { //cria o servidor (localhost)
   fs.readFile('mensagem.html', function(err, data) {; //lê o arquivo mensagem.html
    res.writeHead(200, { 'Content-Type': 'text/html'}); //define o cabeçalho da resposta
    res.write(data); //escreve o conteúdo do arquivo na resposta
    return res.end(); //finaliza a resposta
})
});

server.listen(port, () => { //coloca o servidor para rodar na porta definida
    console.log(`Servidor rodando na porta ${port}`);
})