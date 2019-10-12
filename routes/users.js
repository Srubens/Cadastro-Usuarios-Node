let nedb = require('nedb')
//NOME DA BASE DE DADOS CARREGAMENTO AUTOMATICO
let db = new nedb({ filename: 'users.db', autoload: true })

module.exports = (app) =>{

    let route = app.route('/users')
    let routeId= app.route('/users/:id')

    route.get((req, res) => {

        //RECUPERANDO DADOS DA BASE TODOS USUARIOS
        db.find({}).sort({name:-1}).exec((err,users)=>{
            if (err) {
                app.utils.error.send(err, req, res, 400)
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

    route.post( (req, res) => {

        //INFORMANDO AO POST QUE QREMOS SAVAR O REGISTRO
        /**
         * PASSAR UM OBJ JSON, MAIS UMA FNC COM O PARAMETRO DE ERRO E OU REGISTRO QUE FOI SALVO
         * O ID É GERADO AUTOMATICAMENTE
         */
        db.insert( req.body , (err, users)=>{
            if(err){
                app.utils.error.send(err, req, res)
            }else{
                res.status(200).json(users);
            }
        })

    })

    routeId.get((req, res) =>{

        //ROTA PARA RECUPERAR UM UNICO USUARIO
        db.findOne({ _id:req.params.id }).exec((err, user) =>{
            if (err) {
                app.utils.error.send(err, req, res)
            } else {
                res.status(200).json(user);
            }
        })

    })

};