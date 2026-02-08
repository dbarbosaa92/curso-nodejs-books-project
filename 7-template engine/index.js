const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path')

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials'] 
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')))

app.get('/dashboard', (req, res) => {

    const itens = ['item a', 'item b', 'item c']
    res.render('dashboard', { itens });
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprendendo Node.js',
        category: 'JavaScript',
        body: 'Este é o conteúdo do post',
        comments: 4
    }
    res.render('blogpost', { post });
})

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: 'Aprender Node.js',
            category: 'JavaScript',
            body: 'Este é o conteúdo do post',
            comments: 4
        },
    
        {
            title: 'Aprender Node.js',
            category: 'JavaScript',
            body: 'Este é o conteúdo do post',
            comments: 4
        },
    
        {
            title: 'Aprender Node.js',
            category: 'JavaScript' ,
            body: 'Este é o conteúdo do post',
            comments: 4
        },
    
        {
            title: 'Aprender Node.js',
            category: 'JavaScript',
            body: 'Este é o conteúdo do post',
            comments: 4
        }    
    ]
    res.render('blog', { posts });
})


app.get('/', (req, res) => {

    const user = {
        name: 'Davi',
        surname: 'Santos',
        age: 25,
        showAge: true,
        hobbies: ['programar', 'ler', 'jogar']
    }

    const palavra = 'teste'

    const auth = true

    const approved = true

    res.render('home', { user: user, palavra, auth, approved });
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});