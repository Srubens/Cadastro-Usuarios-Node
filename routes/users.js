let express = require('express');
let routes = express.Router();

//RETIROU O NOME DA ROTA PARA COLOCAR NO INDEX PRINCIPAL

routes.get('/', (req, res) => {
    
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.json({
        
        users: [{
            id: 1,
            name:'Rubens Filipe',
            email:'rubensfilipe6@gmail.com'
        }]
    
    })

})

routes.get('/admin', (req, res) => {
    
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.json({
        
        users: []
    
    })

})



module.exports = routes;