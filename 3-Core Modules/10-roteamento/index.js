const http = require('http'); //importa o modulo http
const fs = require('fs'); //importa o modulo fs
const url = require('url'); //importa o modulo url

const port = 2000;//define a porta onde o servidor vai rodar

const server = http.createServer((req, res) => { //cria o servidor (localhost)

    const q = url.parse(req.url, true); //analisa a url da requisição
    const filename = q.pathname.substring(1); //pega o caminho do arquivo da url

    if(filename.includes('html')){
       if(fs.existsSync(filename)){
        fs.readFile(filename, function(err, data) { //lê o arquivo index.html
            res.writeHead(200, {'Content-Type': 'text/html'}); //define o cabeçalho da resposta
            res.write(data); //escreve o conteúdo do arquivo na resposta
            return res.end();
        })
       } else {
        fs.readFile('404.html', function(err, data){ //lê o arquivo index.html
            res.writeHead(404, {'Content-Type': 'text/html'}); //define o cabeçalho da resposta
            res.write(data); //escreve o conteúdo do arquivo na resposta
            return res.end();
        })}
    } 


   

});

server.listen(port, () => { //coloca o servidor para rodar na porta definida
    console.log(`Servidor rodando na porta ${port}`);
})