const express = require('express')
const app = express()
const server = 5000

const projectsRoutes = require('./projects') // Importa as rotas de projetos

app.use(express.static('public')) // Servir arquivos estáticos da pasta 'public'

app.use('/projects', projectsRoutes) // Usar as rotas de projetos com o prefixo '/projects'

app.listen(server, () => {
    console.log(`Server running on http://localhost:${server}`)
})