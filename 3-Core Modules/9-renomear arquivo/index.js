const fs = require('fs');

const arqAntigo = 'arquivo.txt';
const arqNovo = 'fortinaitielababagi.txt';

fs.rename(arqAntigo, arqNovo, function(err){
    if(err) {
        console.log(err)
        return
    }

    console.log(`O ARQUIVO ${arqAntigo} foi renomeado para  ${arqNovo}`);
})