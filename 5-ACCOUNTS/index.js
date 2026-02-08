// módulos externos
import inquirer from 'inquirer';
import chalk from 'chalk';

// módulos internos
import fs from 'fs';
import { isGeneratorFunction } from 'util/types';
import { get } from 'http';

operation()

console.log('Iniciamos o Accounts')

function operation(){

    inquirer.prompt([
        {
        type: 'list',
        name: 'action',
        message: 'O que voce deseja fazer?',
        choices: [
            'Criar conta',
            'Consultar saldo',
            'Depositar',
            'Sacar',
            'Transferir',
            'Sair'
            ],
    }
])
.then((answer) => {
    const action = answer['action']

    if(action === 'Criar conta'){
        createAccount()
    } else if (action === 'Depositar'){
        deposit()
    } else if( action === 'Consultar saldo'){
        getAccountBalance()
    } else if( action === 'Sacar'){
        widthdraw()
    } else if (action === 'Transferir'){
        transferir()
    } else if (action === 'Sair'){
        console.log(chalk.bgBlue.black('Obrigado por usar o Accounts!'))
        process.exit()
    }
})
.catch((err) => console.log(err));

}

//create an account 
function createAccount(){
    console.log(chalk.bgGreen.black('Parabens por escolher nosso banco!'))
    console.log(chalk.green('Defina as opçoes da sua conta a seguir'))

    buildAccount()
}

function buildAccount(){
    inquirer.prompt([
        {
            name: 'accountName', 
            message: 'Qual o nome da sua conta?'
        }
    ]).then (answer => {
        const accountName = answer['accountName']
        
        console.info(accountName)

        //criar banco de dados
        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts')
        }

        //verificar se a conta ja existe
        if(fs.existsSync(`accounts/${accountName}.json`)){
            console.log(
                chalk.bgRed.black('Esta conta ja existe, por favor crie com outro nome!')
            )
            buildAccount()
            return
        }

        // criar conta no banco de dados 
        fs.writeFileSync(
            `accounts/${accountName}.json`,
            '{"balance": 0}',
            function (err){
                console.log(err)
            }
        )

        console.log(chalk.green('Parabens, sua conta foi criada!'))
        operation()


    }).catch(err => console.log(err))
}

//add an amount to the user account
function deposit(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual conta voce deseja depositar?'
        }
    ])
        .then((answer) => {
            const accountName = answer['accountName']

            //verify if account exists
            if(!checkAccount(accountName)){
                return deposit()
            }

            inquirer.prompt([
                {
                    name: 'amount',
                    message:'Quanto voce deseja ddepositar?',
                },
            ]).then((answer) => {

                const amount = answer['amount']

                //add an amount to the account
                addAmount(accountName, amount)
                operation()

            }).catch(err => console.log(err))

        })
        .catch(err => console.log(err))
    }

    function checkAccount(accountName){
        if(!fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.bgRed.black('Esta conta não existe, escolha uma conta existente'))
            return false
        }

        return true
    }

    function addAmount(accountName, amount){

        const accountData = getAccount(accountName)

        if(!amount){
            console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'))
            return deposit()
        }

        accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

        fs.writeFileSync(
            `accounts/${accountName}.json`,
            JSON.stringify(accountData),
            function(err){
                console.log(err)
            },
        )

        console.log(chalk.green(`Foi depositado um valor de R$${amount} na sua conta!`))

    }

    function getAccount(accountName){
        const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
            encoding: 'utf8',
            flag: 'r'
        })

        return JSON.parse(accountJSON)
    }

//show account balance
    function getAccountBalance(){
        inquirer.prompt([
            {
                name:'accountName',
                message: 'Qual o nome da sua conta?'
            }

        ]).then((answer) => {
            const accountName = answer["accountName"]

            //verify if account exists
            if(!checkAccount(accountName)){
                return getAccountBalance()
            }

            const accountData = getAccount(accountName)

            console.log(chalk.bgBlue.black(`O saldo da sua conta é R$${accountData.balance}`))
            operation()
        }

        )
        .catch(err => console.log(err))
    }

    //withdraw an amount of the user account
    function widthdraw(){
        inquirer.prompt([
            {
                name: 'accountName',
                message: 'Qual o nome da sua conta?'
            }
        ]).then((answer) => {

            const accountName = answer ['accountName']

            //verify if account exists
            if(!checkAccount(accountName)){
                return widthdraw()
            }

            inquirer.prompt([
                {
                    name: 'amount',
                    message: 'Quanto voce deseja sacar?',
                },
            ]).then((answer) => {

               const amount = answer ['amount']

               removeAmount(accountName, amount)
               
            }).catch(err => console.log(err))

            }).catch(err => console.log(err))
    }

    function removeAmount(accountName, amount){

        const accountData = getAccount(accountName)

        //etapa de verificações 
        if(!amount){
            console.log(
                chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!')
            )
            return widthdraw()
        }

        if(accountData.balance < amount){
            console.log(chalk.bgRed.black('Saldo insuficiente!'))
            return widthdraw()
        }

        accountData.balance = parseFloat(accountData.balance)  - parseFloat(amount)

        fs.writeFileSync(
            `accounts/${accountName}.json`,
            JSON.stringify(accountData),
            function(err){
                console.log(err)
            },
        )

        console.log(chalk.green(`Foi realizado um saque de R$${amount} na sua conta!`))
        operation()

    }

    //fazer a transferencia de conta!!!
    function transferir(){
        inquirer.prompt([
            {
                name: 'accountName',
                message: 'Qual a sua conta?'
            }
        ]).then((answer) => {

            const accountName = answer['accountName']
        
        //verify if account exists
            if(!checkAccount(accountName)){
                return transferir()
            }

        inquirer.prompt([
            {
                name: 'otherAccount',
                message: 'Qual o nome da conta que voce deseja transferir o valor?'
            }
        ]).then((answer) => {

            const otherAccount = answer['otherAccount']

            //verify if other account exists
            if(!checkAccount(otherAccount)){
                console.log(chalk.bgRed.black('A conta para qual voce deseja transferir nao existe, escolha uma conta existente'))
                //nomes de contas existentes
                return transferir()
            }

        inquirer.prompt([
            {
                name: 'amount',
                message: 'Quanto voce deseja transferir?'
            }
        ]).then((answer) => {

            const amount = answer['amount']

            //verify if amount is valid
            if(!amount){
                console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'))
            }

            const accountData = getAccount(accountName)

            //verify if the user has enough balance
            if(accountData.balance < amount){
                console.log(chalk.bgRed.black('Saldo insuficiente!'))
                return transferir()
            }

            //remove amount from user account
            accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)
            fs.writeFileSync(
                `accounts/${accountName}.json`,
                JSON.stringify(accountData),
                function(err){
                    console.log(err)
                }
            )

            //add amount to other account
            const otherAccountData = getAccount(otherAccount)
            otherAccountData.balance = parseFloat(otherAccountData.balance) + parseFloat(amount)

            fs.writeFileSync(
                `accounts/${otherAccount}.json`,
                JSON.stringify(otherAccountData),
                function(err){
                    console.log(err)
                }
            )

            console.log(chalk.green(`Foi realizada uma transferencia de R$${amount} da conta ${accountName} para a conta ${otherAccount}`))
            operation()
        }

        ).catch(err => console.log(err))

        }).catch(err => console.log(err))
    }).catch(err => console.log(err))
    }