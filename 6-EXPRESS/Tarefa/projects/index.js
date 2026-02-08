const express = require('express');
const router = express.Router();

const path = require('path')

const basePath = path.join(__dirname, '../templates') // caminho absoluto até a pasta templates

router.get('/', (req, res) => {
    res.sendFile(`${basePath}/projects.html`) // aqui eu envio o arquivo html
})

router.get('/:id', (req, res) => {
    res.sendFile(`${basePath}/project.html`) // aqui eu envio o arquivo html    
})


module.exports = router