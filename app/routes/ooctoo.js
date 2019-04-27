module.exports = function(app){
    
    app.get('/api/termos-condicoes', function(req, res){

        var conn = app.config.dbConnectionooctoo();

        conn.query('select app_termos from termos_de_usos where id = 0', function(error, result){
        
            for(var i=0; i <result.length; i++){
            res.json(result[0].app_termos);
        } 
     
        });    
        
        //res.render("ooctoo/termos");
    });
};
 

  
