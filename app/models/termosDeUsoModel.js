module.exports = function(){

    this.getTermos = function(connection, callback){
        connection.query('select app_termos from termos_de_usos where id = 0', callback);
    }

    return this;
  
}
  