module.exports = function(app){

    app.get('/users', function(req,res){ 
        var connection=  app.config.dbConnection()      
        var userModel=app.app.models.userModel
        userModel.getUser(connection, function(error, result){
            
            res.render('users/userlist', { users : result });
        })     
    });
  
    app.get('/user/new', function(req,res){
        var connection=  app.config.dbConnection()      
        var userModel=app.app.models.userModel.js        
        res.render('users/newuser');
      
    });

    app.post('/user/salvar', function(req,res){
        var connection=  app.config.dbConnection()      
        var userModel=app.app.models.userModel   
        var user=req.body  
        console.log(req.body)   
        userModel.postUser(user,connection, function(error, result){
            res.redirect('/users');
        })      
    });
}