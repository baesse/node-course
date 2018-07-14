module.exports=function(){

    this.getNoticia=function(connection,callback){
        connection.query("SELECT * FROM noticias where id=1",callback);
    }
    this.getNoticias=function(connection,callback){
        connection.query("SELECT * FROM noticias",callback);
    }
    this.postNoticias=function(noticia,connection,callback){
        connection.query("insert into noticias set ?",noticia,callback);
    }
    return this
}