module.exports = {

	user:(app,req,res) =>{

		//VERIFICANDO SE NAO É VAZIO
        req.assert('name','O nome é obrigatorio').notEmpty()
        //VERIFICANDO SE NAO É VAZIO && VERIFICANDO SE É UM EMAIL VALIDO
        req.assert('email','O email é obrigatorio').notEmpty().isEmail()

        let errors = req.validationErrors()

        if(errors){
            app.utils.error.send(errors, req, res)
            return false
        }else{
        	return true
        }

	}

}