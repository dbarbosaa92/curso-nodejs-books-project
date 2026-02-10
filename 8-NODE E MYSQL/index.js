const express = require('express')
const exphbs = require('express-handlebars')
//const mysql = require('mysql')
const pool = require('./db/conn') //tudo que era coon, vira pool

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

app.get('/', (req, res) => { //pagina principal
    res.render('home')
})

app.post('/books/insertbook', (req, res) => { //caminho usado para executar a fucao de adicionar dados na tabela do BD

    console.log('BODY:', req.body)

    const title = req.body.title
    const pageqty = req.body.pageqty

    //const sql = 'INSERT INTO books (title, pageqty) VALUES (?, ?)'
    const sql = `INSERT INTO books(?? , ??) VALUES (? , ?)`
    const data = ['title', 'pageqty', title, pageqty] //substitui igual C (Queries)


    pool.query(sql, data, (err) => { //[title, poageqty] no modelo anterior
        if (err) {
            console.error(err)
            return
        }
        res.redirect('/')
    })
})

app.get('/books', (req, res) => { //funcao para pegar as informacoes do banco de dados
    const sql = 'SELECT * FROM books'

    pool.query(sql, (err, data) => {
        if (err) {
            console.log(err)
        }

        const books = data
        console.log(books)

        res.render('books', { books })
    })
})

app.get('/books/:id', (req, res) => {
    const id = req.params.id
    const sql = `SELECT * FROM books WHERE ?? = ? `
    const data = ['id', id]

    pool.query(sql, data, (err, data) => {
        if(err) {
            console.log(err)
        }

        const book = data[0]

        res.render('book', { book })
    })
})

app.get('/books/edit/:id', (req, res) => {

    const id = req.params.id

    const sql = `SELECT * FROM books WHERE ?? = ?`
    const data = ['id', id]

    pool.query(sql, data, (err, data) => {
        if(err) {
            console.log(err)
            return
        }
        const book = data[0]
        res.render('editbook', { book })
    })

})

app.post('/books/updatebook', (req, res) => {
    const id = req.body.id
    const title = req.body.title
    const pageqty = req.body.pageqty

    const sql = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`
    const data = ['title', title, 'pageqty', pageqty, 'id', id]

    pool.query(sql, data, (err) => {
        if(err) {
            console.log(err)
        }

        res.redirect('/books')
    })
})

app.post('/books/remove/:id', (req, res) => {
    const id = req.params.id

    const sql = `DELETE from books WHERE id = ${id}`

    pool.query(sql, (err) => {
        if(err){
            console.log(err)
        return
        }

        res.redirect('/books')

    })
})


// const conn = mysql.createConnection({ //metodo para criar a conexao, mas ainda nao esta sendo executada
//     //tem o pool para substituir!
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'nodemysql',
//     port: 3307

// })

// conn.connect(function (err) { //ligar o nosso servidor local
//     //o pool entra no lugar
//     if (err) {
//         console.error('Erro ao conectar:', err)
//         return
//     }

//     console.log('Conectado ao MySQL!')
//     
// })


app.listen(3000)

pool.query('SHOW DATABASES', (err, results) => { //teste efetuado
    if (err) {
        console.log(err)
        return
    }
    console.log(results)
})

