const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('toughts', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307
})

try{
    sequelize.authenticate()
    console.log('Conectamos ao banco')
} catch(err) {
    console.log(`Não foi possivel conectar ao Banco de Dados: ${err}`)
}

module.exports = sequelize