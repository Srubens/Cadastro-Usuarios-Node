const express = require('express')
let routesIndex = require('./routes/index');
let routesUsers = require('./routes/users');

let app = express();

//ADD O NOME DA ROTA PARA FACILITAR NO CAMINHO

app.use(routesIndex);
app.use('/users',routesUsers);


app.listen(2000, ()=>{
	console.log('servidor rodando')
})