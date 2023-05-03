    const Sequelize = require('sequelize')
    const sequelize = new Sequelize('servidor', 'root', 'senai', {
        host: 'localhost',
        dialect: 'mysql',
     })

    //  sequelize.authenticate().then(()=>{
    //     console.log('conexão realizada com sucesso')
    //  }).catch((error)=>{
    //     console.log('não foi possível realizar a conexão', error)
    //  })

     module.exports = sequelize