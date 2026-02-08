import chalk from 'chalk'

const nota = 6;

if(nota >= 7){
    console.log(chalk.green(`Parabéns, sua nota foi ${nota}`));
} else{
    console.log(chalk.red(`Sua nota foi ruim, voce tirou ${nota}`));
}
