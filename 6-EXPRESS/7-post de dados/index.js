const express = require('express');
const app = express();
const port =  2000

const path = require('path')

//ler o body
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

const basePath = path.join(__dirname, 'templates') // caminho absoluto até a pasta templates

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`) // aqui eu envio o arquivo html
})

app.post('/users/save', (req, res) => {
    console.log(req.body) // aqui eu recebo os dados do formulário

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos.`)

    res.sendFile(`${basePath}/userform.html`) // aqui eu envio o arquivo html
})

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

