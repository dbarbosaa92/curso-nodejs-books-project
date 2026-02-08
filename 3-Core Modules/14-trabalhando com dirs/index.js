const fs = require ('fs');

if (!fs.existsSync ('./pasta')) {
    console.log('Não existe')
}

fs.mkdirSync('minhapasta')

if(fs.existsSync('./minhapasta')){
    console.log('Existe')
}