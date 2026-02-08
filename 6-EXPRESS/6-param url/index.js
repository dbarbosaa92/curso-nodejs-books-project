const express = require('express');
const app = express();
const port =  2000

const path = require('path')

const basePath = path.join(__dirname, 'templates') // caminho absoluto até a pasta templates
ggg
app.get('/users/:id', (req, res) => {
    const id = req.params.id // capturando o id que vem na url

    //leitura de tabela users, resgatar um usuário do banco de dados
    console.log(`Estamos buscando pelo usuario: ${id}`)

    res.sendFile(`${basePath}/users.html`) // aqui eu envio o arquivo html
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`) // aqui eu envio o arquivo html
})

app.listen(port, () => { // porta onde o servidor vai rodar
    console.log(`App rodando na porta ${port}`)
})