//externo
const minimist = require('minimist'); // Importa o módulo minimist para facilitar o parsing de argumentos da linha de comando

//interno
const soma = require('./soma').soma //importamos a função soma do arquivo soma.js
const raizq = require('./soma').raizq //importamos a função raizq do arquivo soma.js
const args = minimist(process.argv.slice(2)); // Pega os argumentos passados na linha de comando, ignorando os dois primeiros (caminho do node e do script)

const a = parseInt(args['a']);
const b = parseInt(args['b']);//traduz para inteiro

soma(a, b); //chama a função soma passando os valores de a e b
raizq(a); //chama a função raizq passando o valor de a