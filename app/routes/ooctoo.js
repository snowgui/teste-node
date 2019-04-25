var connOoctoo = require('../../config/dbConnection.ooctoo');
module.exports = function(app){
    
    var conn = connOoctoo();
    
    app.get('/ooctoo-termos-condicoes', function(req, res){
        conn.query('select app_termos from termos_de_usos where id = 0', function(error, result){
        
        for(var i=0; i <result.length; i++){
            res.json(result[0].app_termos);
        } 
     
        });    
        
        //res.render("ooctoo/termos");
    });
};

 
