const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

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

    const sql = 'INSERT INTO books (title, pageqty) VALUES (?, ?)'

    conn.query(sql, [title, pageqty], (err) => {
        if (err) {
            console.error(err)
            return
        }
        res.redirect('/')
    })
})

app.get('/books', (req, res) => { //funcao para pegar as informacoes do banco de dados
    const sql = 'SELECT * FROM books'

    conn.query(sql, (err, data) => {
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
    const sql = `SELECT * FROM books WHERE id = ${id} `

    conn.query(sql, (err, data) => {
        if(err) {
            console.log(err)
        }

        const book = data[0]

        res.render('book', { book })
    })
})

app.get('/books/edit/:id', (req, res) => {

    const id = req.params.id

    const sql = `SELECT * FROM books WHERE id = ${id}`

    conn.query(sql, (err, data) => {
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

    const sql = `UPDATE books SET title = '${title}', pageqty = '${pageqty}' WHERE id = ${id}`

    conn.query(sql, (err) => {
        if(err) {
            console.log(err)
        }

        res.redirect('/books')
    })
})


const conn = mysql.createConnection({ //metodo para criar a conexao, mas ainda nao esta sendo executada
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql',
    port: 3307

})

conn.connect(function (err) { //ligar o nosso servidor local
    if (err) {
        console.error('Erro ao conectar:', err)
        return
    }

    console.log('Conectado ao MySQL!')
    app.listen(3000)
})


conn.query('SHOW DATABASES', (err, results) => { //teste efetuado
    if (err) {
        console.log(err)
        return
    }
    console.log(results)
})

