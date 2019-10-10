const express = require('express');
let app = express();

app.get('/', (req,res) =>{

	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end('<h1>Ola Mundo!</h1>')

});

app.get('/users', (req,res) =>{

	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(
		{
			id: 1,
			nome: 'rubens',
			email: 'rubensfilipe6@gmail.com'

		}
	))

});


app.listen(2000, ()=>{
	console.log('servidor rodando')
})