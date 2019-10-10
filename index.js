const express = require('express')
const consign = require('consign')

let app = express();

//ADD O CONSIGN E A PASTA Q QREMOS E ONDE QREMOS A INCLUSAO  
consign().include('routes').into(app);


app.listen(2000, ()=>{
	console.log('servidor rodando')
})