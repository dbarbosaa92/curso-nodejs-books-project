const x = 10

try {
    x = 2
} catch (err) {
    console.log(`Erro: ${err}`)
}
//este servve para tratar erros, ou seja, ele tenta executar o codigo dentro do try, se der erro ele pula para o catch e executa o codigo dentro do catch
//é uma maneira de nao encerrar o programa de maneira seca, ele avisa onde e pq deu erro