const express = require('express')
const app = express()
const exphbs = require('express-handlebars')


// conectar pasta e arquivo: db/ conection:
const conection = require('./db/conection')
const Cliente = require('./models/Cliente')

const PORT = 3000
const hostname = 'localhost'

// ---------------CONFIGURANDO O MIDDLEWARE--------//
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// ======= EXPRESS-HANDLEBARS=========//
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
// -------ARQUIVOS ESTÁTTICOS PUBLIC--//
app.use(express.static('public'))
// ---------ROTAS db ---------//
app.get('/listar', async (req,res)=>{
    const dados = await Cliente.findALL({raw:true})
    console.log(dados)
    res.redirect('/')
})

app.get('/', (req,res)=>{
    res.end('mensagem final')
})


// ---------------ROTAS db--------//
conection.sync().then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor rodando em ${hostname}:${PORT}`)
    })
}).catch((error)=>{
    console.log('erro de conexão',error)
})
