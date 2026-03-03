//Conexão com o Sequelize!
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307
})

// try{

//     sequelize.authenticate()
//     console.log('Conectado com sucesso ao Sequelize')

// } catch(err) {
//     console.log(err)
// }

module.exports = sequelize