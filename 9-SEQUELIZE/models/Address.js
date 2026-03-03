const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const User = require('./User')

const Address = db.define('Address', {

    street: {
        type: DataTypes.STRING,
        required: true,
    },
    number: {
        type: DataTypes.STRING,
        required: true,
    },
    city: {
        type: DataTypes.STRING,
        required: true,
    },
})

User.hasMany(Address) //User 1:N
Address.belongsTo(User) // Address pertence a User

module.exports = Address