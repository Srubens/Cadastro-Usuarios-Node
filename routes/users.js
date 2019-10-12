let nedb = require('nedb')
//NOME DA BASE DE DADOS CARREGAMENTO AUTOMATICO
let db = new nedb({ filename: 'users.db', autoload: true })

module.exports = (app) =>{

    app.get('/users', (req, res) => {

        //RECUPERANDO DADOS DA BASE
        db.find({}).sort({name:-1}).exec((err,users)=>{
            if (err) {
                console.log(`Erro: ${err}`)
                res.status(400).json({ erro: err })
            } else {

                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.json({
                    users
                })
            
            }
        })

    })

    app.get('/users/admin', (req, res) => {

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json({

            users: []

        })

    })

    app.post('/users', (req, res) => {

        //INFORMANDO AO POST QUE QREMOS SAVAR O REGISTRO
        /**
         * PASSAR UM OBJ JSON, MAIS UMA FNC COM O PARAMETRO DE ERRO E OU REGISTRO QUE FOI SALVO
         * O ID É GERADO AUTOMATICAMENTE
         */
        db.insert( req.body , (err, users)=>{
            if(err){
                console.log(`Erro: ${err}`)
                res.status(400).json({ erro: err })
            }else{
                res.status(200).json(users);
            }
        })

    })

};