module.exports = function(app){
    
    app.get('/api/termos-condicoes', function(req, res){

        var conn = app.config.dbConnectionooctoo();
        var termosModel = app.app.models.termosDeUsoModel;

        termosModel.getTermos(conn , function (error, result){
            res.json(result[0].app_termos);
        });    
    });
};
 

  
