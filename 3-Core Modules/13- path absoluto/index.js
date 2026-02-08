const path = require('path');

//path absoluto
console.log(path.resolve('teste.txt')); //C:\Users\Usuario\projetos\nodejs\arquivo.txt    

//formar um path
const midFolder = 'relatorios'
const fileName = 'davi.txt'

const finalPath = path.join('/', 'arquivos', midFolder, fileName);
console.log(finalPath); //\arquivos\relatorios\davi.txt