console.log(process.argv); //responsavel por ler os argumentos passados via terminal

const args = process.argv.slice(2); //remove os dois primeiros argumentos que são o caminho do node e do arquivo

console.log(args);

const nome = args[0].split('=')[1]; //pega o primeiro argumento e separa pelo '=' para pegar o valor

console.log(`Olá ${nome}`);

const idade = args[1].split('=')[1]; //pega o segundo argumento e separa pelo '=' para pegar o valor

console.log(`Você tem ${idade} anos`);
