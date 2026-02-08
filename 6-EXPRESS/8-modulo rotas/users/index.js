const express = require('express');
const router = express.Router();
const path = require('path')

const basePath = path.join(__dirname, '../templates') // caminho absoluto até a pasta templates

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`) // aqui eu envio o arquivo html
})

router.post('/save', (req, res) => {
    console.log(req.body) // aqui eu recebo os dados do formulário

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos.`)

    res.sendFile(`${basePath}/userform.html`) // aqui eu envio o arquivo html
})

router.get('/:id', (req, res) => {
    const id = req.params.id // capturando o id que vem na url

    //leitura de tabela users, resgatar um usuário do banco de dados
    console.log(`Estamos buscando pelo usuario: ${id}`)

    res.sendFile(`${basePath}/users.html`) // aqui eu envio o arquivo html
})

module.exports = router;