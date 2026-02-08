const readline = require("readline").createInterface({ //pega o modulo readline do nodejs
    input: process.stdin, // entrada do teclado
    output: process.stdout // saida no console
})

// pergunta algo para o usuario
readline.question("Qual o seu nome? ", (nome) => {
    if(nome === 'Anabia'){
        console.log('Essa é a namorada do Davi')
    } else{
    console.log(`Olá ${nome}`);
}
    readline.close(); // fecha o input
})