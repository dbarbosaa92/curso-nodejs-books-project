//Aqui criamos nossa tabela com o proprio JS e ainda definimos atraves de classes como seus formatos serão
const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    occupation: {
        type: DataTypes.STRING,
        required: true,
    },
    newsletter: {
        type: DataTypes.BOOLEAN,
    },
}) 

module.exports = User