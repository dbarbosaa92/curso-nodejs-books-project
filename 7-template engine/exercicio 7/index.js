const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path')

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials'] 
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static(path.join(__dirname, 'public')))

const produtos = [
        {
            nome: 'caneta',
            preco: 1.50,
            quantidade: 10,
            id:1
        },
        {
            nome: 'caderno',
            preco: 15.00,
            quantidade: 5 ,
            id: 2
        },
        {
            nome: 'lapis',
            preco: 0.50,
            quantidade: 20,
            id: 3
        }
    ]

app.get('/', (req, res) => {
    res.render('home', { produtos })
})

app.get('/produto/:id', (req, res) => {
    const id = Number(req.params.id)

    const produto = produtos.find( p => p.id === id)

    if (!produto) {
        return res.status(404).send('Produto nao encontrado')
    }

    res.render('produto', { produto }) 
})

app.listen(3000, () => {
    console.log('Tudo certo!')
})