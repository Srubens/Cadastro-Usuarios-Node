const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

let app = express();

app.use(bodyParser.urlencoded({ extended: false }))

//TODOS OS DADOS QUE ELE RECEBER VIRA VIA JSON
app.use(bodyParser.json())

//ADD O CONSIGN E A PASTA Q QREMOS E ONDE QREMOS A INCLUSAO  
consign().include('routes').include('utils').into(app);


app.listen(2000, ()=>{
	console.log('servidor rodando')
})