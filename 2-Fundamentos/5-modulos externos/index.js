const minimist = require('minimist'); // Importa o módulo minimist para facilitar o parsing de argumentos da linha de comando

const args = minimist(process.argv.slice(2)); // Pega os argumentos passados na linha de comando, ignorando os dois primeiros (caminho do node e do script)

console.log(args);

const nome = args['nome'] // Acessa o valor do argumento 'nome' passado na linha de comando
const namorada = args ['namorada']

console.log(nome, namorada); // Imprime os valores dos argumentos 'nome' e 'namorada'