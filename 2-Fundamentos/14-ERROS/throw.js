const x = '10';

//checar se x é um numero
if(!Number.isInteger(x)){
    throw new Error('x não é um número inteiro'); 
}
//aqui vai dar erro e ainda vem com uma mensagem personalisada no terminal

console.log('continuando o programa...')