const express = require('express')
const exphbs = require('express-handlebars')
//const mysql = require('mysql') ja esta baixado diretamente
const conn = require('./db/conn') //tudo que era coon, vira pool

const User = require('./models/User')
const Address = require('./models/Address')

const app = express()

app.use( 
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/users/create', (req, res) => {
    res.render('adduser')
})

app.post('/users/create', async (req, res) => {
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter

    //quando nao for mudar nada => const { name, occupation, newsletter} = req.body

    if(newsletter === 'on'){
        newsletter = true
    } else {
        newsletter = false
    }

    console.log(req.body)

    await User.create({name, occupation, newsletter}) //ja facilita encurtando código e dando mais segurança a aplicaçao

    res.redirect('/')
})

app.get('/users/:id', async (req, res) => {
    const id = req.params.id

    const user = await User.findOne({ raw: true, where: {id: id} }) //findOne, nosso famoso WHERE

    res.render( 'userview', { user: user})
})

app.post('/users/delete/:id', async (req, res) => {
    const id = req.params.id

    await User.destroy({where: {id: id}})

    res.redirect('/')
})

app.get('/users/edit/:id', async (req, res) => {
    const id = req.params.id

    try {
        const user = await User.findOne({ include: Address, where: {id: id}})

    res.render('useredit', {user: user.get({plain: true})})
    } catch (error) {
        console.log(error)
    }

})

app.post('/users/update/', async (req, res) => {

    const { id, name, occupation } = req.body
    let newsletter = req.body.newsletter

    if(newsletter === 'on'){
        newsletter = true
    } else {
        newsletter = false
    }

    const userData = {
        id,
        name,
        occupation,
        newsletter
    }

    await User.update(userData, {where: {id: id}})

    res.redirect('/') 
})


app.get('/', async (req, res) => { //pagina principal

    const users = await User.findAll({ raw: true }) //findAll vem para substituir o 'SELECT * FROM...'
    //raw transforma os dados em mais simples, fazendo com que fique melhor de ler, assim como um JSOM
    console.log(users)

    res.render('home', { users: users })
})

app.post('/address/create', async (req, res) => {

    const {UserId, street, number, city} = req.body

    const address = {
        UserId,
        street,
        number,
        city,
    }

    await Address.create(address)

    res.redirect(`/users/edit/${UserId}`)
})

app.post('/address/delete', async (req, res) => {
    const id = req.body.id
    const UserId = req.body.UserId

    await Address.destroy({
        where: {id: id}
    })

    res.redirect(`/users/edit/${UserId}`)
})

conn
.sync()
//.sync({force: true}) //force: true força a recriação da tabela, útil para testes
.then(() => {
    app.listen(3000)
})
.catch((err) => {console.log(err)})

async function testQuery() {
  try {
    await conn.query('SELECT 1')
    console.log('✅ Banco respondeu corretamente!')
  } catch (error) {
    console.error('❌ Erro ao executar query:', error)
  }
}

testQuery()

