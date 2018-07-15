module.exports = function(app){
    app.get('/formulario_inclusao_noticia', function(req,res){
        res.render('admin/form_add_noticia');
    });

    app.post('/noticias/salvar', function(req,res){
        var noticias_model=new app.app.models.noticiasModel
        var connection=  app.config.dbConnection()       
        var noticias=req.body
        req.assert('titulo','Titulo é obrigatório').notEmpty();
        req.assert('resumo','Resumo é obrigatorio').notEmpty();
        req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);
        req.assert('autor','Autor é obrigatório').notEmpty();
        req.assert('date_noticia','Data é obrigatoria').notEmpty();
        req.assert('autor','Noticia é obrigatoria').notEmpty()
        erros=req.validationErrors()
        if(req.validationErrors()){
            res.redirect('/formulario_inclusao_noticia',{validacao:erros})
            return;
        }
        noticias_model.postNoticias(noticias,connection,function(erro,resp){
            res.redirect('/noticias')
        })
        
    });
}