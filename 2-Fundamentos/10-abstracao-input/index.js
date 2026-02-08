const inquirer = require ('inquirer');

inquirer.prompt([ // Array de perguntas
    {
        name: 'p1',
        message: 'Qual a primeira nota? ',
    },
    {
        name: 'p2',
        message: 'Qual a segunda nota? ',
    },
])
.then((answers) => { // Promessa
    console.log(answers); // Objeto com as respostas
    const media = ((parseInt(answers.p1) + parseInt(answers.p2)) / 2) //
    console.log(`A média é ${media}`);
})
.catch((err) => console.log(err)) // Tratamento de erro