//criar um projeto que aceita pacotes internos, instala chalk e inquirer
// recebe nome e idade de usuario
//ersposta com plano de fundo amarelo e texto preto
//inserir tratamento com erro do inquirer com o catch

const chalk = require('chalk')
const inquirer = require('inquirer')

inquirer.prompt([
    {
        name: 'nome',
        message: 'Qual o seu nome? '
    },
    {
        name: 'idade',
        message: 'Qual a sua idade? '
    }
])
.then((answers) => {
    console.log(answers);
    console.log(chalk.bgYellow.black(`Olá ${answers.nome}, voce tem ${answers.idade} anos!`))
})