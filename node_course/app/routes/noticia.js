module.exports = function(app){
  
    app.get('/noticia', function(req,res){
        var noticias_model=new app.app.models.noticiasModel
        var connection=  new app.config.dbConnection()        
        noticias_model.getNoticia(connection, function(error, result){
            res.render('noticias/noticia', { noticia : result });
        })

      
    });
}