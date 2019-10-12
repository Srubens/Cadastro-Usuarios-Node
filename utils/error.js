module.exports = {
    /**
     * RECEBE OS PARAMETROS
     * ERR = ERRO
     * REQ = REQUEST
     * RES = RESPONSE
     * CODE = 400 CODIGO DO ERRO 
     * CASO SEJA OUTRO ERRO SERÁ INFORMADO
     */
    send: (err, req, res, code = 400) =>{
        console.log(`Error: ${err}`)
        res.status(code).json({ error: err })
    }

}