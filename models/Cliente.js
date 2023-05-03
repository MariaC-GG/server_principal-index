const {DataTypes} = require('sequelize')
const sequelize = require('../db/conection')
const db = require('../db/conection')

const Cliente = db.define('clientes', {
    // Model attributes are defined here
    nome: {
      type: DataTypes.STRING,
    },
    idade: {
      type: DataTypes.INTEGER,
    }
  },{
    createdAt: false,
    updatedAt: false,
  })

//   Cliente.sync({force:true})

  module.exports = Cliente