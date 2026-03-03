const { DataTypes } = require ('sequelize')
const db = require('../db/conn')

//tabela criada pelo node.js
const Task = db.define('Task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    done: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },

})

module.exports = Task