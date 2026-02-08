//imprimir mais de um valor
const a = 3
const b = 'String'
const c = [1, 2, 3]

console.log(a, b, c);

//contagem de impressões 
console.count(`Valor de a é ${a}, contagem de vezes que apareceu:`);
console.count(`Valor de a é ${a}, contagem de vezes que apareceu:`);
console.count(`Valor de a é ${a}, contagem de vezes que apareceu:`);
console.count(`Valor de a é ${a}, contagem de vezes que apareceu:`);
console.count(`Valor de a é ${a}, contagem de vezes que apareceu:`);

//limpar o console
setTimeout(() => {
    console.clear()
}, 3000)