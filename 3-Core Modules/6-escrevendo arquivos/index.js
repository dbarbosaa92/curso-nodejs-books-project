const http = require('http'); //importa o modulo http
const fs = require('fs'); //importa o modulo fs

const port = 3000;//define a porta onde o servidor vai rodar

const server = http.createServer((req, res) => { //cria o servidor (localhost)

    const urlInfo = require('url').parse(req.url, true); //analisa a url da requisição
    const name = urlInfo.query.name; //pega o valor do parâmetro 'name' da url

    if(!name){
        fs.readFile('index.html', function(err, data) {; //lê o arquivo index.html
        res.writeHead(200, { 'Content-Type': 'text/html'}); //define o cabeçalho da resposta
        res.write(data); //escreve o conteúdo do arquivo na resposta
        return res.end(); //finaliza a resposta
        })
    } else {
       fs.writeFile('arquivo.txt', name, function(err, data) { //escreve o valor do parâmetro 'name' no arquivo arquivo.txt
        res.writeHead(302, {
            Location: '/' //redireciona para a página inicial
        })
        return res.end(); //finaliza a resposta
       })

    }
});

server.listen(port, () => { //coloca o servidor para rodar na porta definida
    console.log(`Servidor rodando na porta ${port}`);
})