const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')


let app = express();

app.use(bodyParser.urlencoded({ extended: false }))

// TODOS OS DADOS QUE ELE RECEBER VIRA VIA JSON
app.use(bodyParser.json())

// INCLUI O EXPRESS-VALIDATOR
app.use(expressValidator())

//ADD O CONSIGN E A PASTA Q QREMOS E ONDE QREMOS A INCLUSAO  
consign().include('routes').include('utils').into(app);


app.listen(2000, ()=>{
	console.log('servidor rodando')
})