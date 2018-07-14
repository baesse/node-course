module.exports = function(app){
    app.get('/formulario_inclusao_noticia', function(req,res){
        res.render('admin/form_add_noticia');
    });

    app.post('/noticias/salvar', function(req,res){
        var noticias_model=app.app.models.noticiasModel
        var connection=  app.config.dbConnection()       
        var noticias=req.body
        noticias_model.postNoticias(noticias,connection,function(erro,resp){
            res.redirect('/noticias')
        })
        
    });
}