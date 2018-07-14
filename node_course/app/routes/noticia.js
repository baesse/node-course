module.exports = function(app){
  
    app.get('/noticia', function(req,res){
        var noticias_model=app.app.models.noticiasModel
        var connection=  app.config.dbConnection()        
        noticias_model.getNoticias(connection, function(error, result){
            res.render('noticias/noticia', { noticia : result });
        })

      
    });
}