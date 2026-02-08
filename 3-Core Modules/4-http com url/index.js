const http = require('http'); //importa o modulo http

const port = 4000;//define a porta onde o servidor vai rodar

const server = http.createServer((req, res) => { //cria o servidor (localhost)
    const urlInfo = require('url').parse(req.url, true); //importa o modulo url para manipular a url
    const name = urlInfo.query.name; //pega o valor do parametro name da url

   res.statusCode = 200; //
   res.setHeader('Content-Type', 'text/html'); //define o tipo de conteudo que o servidor vai retornar
   
   if(!name) {  //verifica se o parametro name foi passado na url}
    res.end(
        '<h1>Preencha o seu nome: </h1><form method="GET"><input type="text" name="name"/><button type="submit">Enviar</button></form>'
    )
   } else {
    res.end(`Seja bem vindo ${name}!`); //retorna uma mensagem de boas vindas com o nome passado na url
   }
    
})

server.listen(port, () => { //coloca o servidor para rodar na porta definida
    console.log(`Servidor rodando na porta ${port}`);
})