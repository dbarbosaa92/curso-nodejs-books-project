const {Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307
})

sequelize
    .authenticate()
    .then(() => {
        console.log('Conectamos ao mysql')
    })
    .catch((err) => {
        console.log(`Nao foi possivel conectar: ${err}`)
    })

module.exports = sequelize
