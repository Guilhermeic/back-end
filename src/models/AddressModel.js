const connection = require('../config/database/connection')
const {DataTypes} = require('sequelize')

const UserModel = require('./UserModel')

const AddressModel = connection.define("Address",{
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: UserModel,
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    rua: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    numero:{
        type: DataTypes.STRING(10),
        allowNull: false
    },
    bairro: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    cidade:{
        type: DataTypes.STRING(80),
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    cep:{
        type: DataTypes.STRING(8),
        allowNull: false
    }

});

module.exports = AddressModel;