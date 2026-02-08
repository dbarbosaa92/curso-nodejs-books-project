const fs = require('fs'); //importa o modulo fs

fs.stat('novoarquivo.txt', (err, stats) => { //pega os detalhes do arquivo
     if (err) {
        console.log(err)
        return
     }    

     console.log(stats) //mostra os detalhes do arquivo
     console.log(stats.isFile()) //verifica se é um arquivo
     console.log(stats.isDirectory()) //verifica se é um diretorio
     console.log(stats.ctime) //mostra a data de criacao
     console.log(stats.size) //mostra o tamanho do arquivo em bytes
})