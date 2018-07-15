function Noticias(){

}
Noticias.prototype.getNoticias=function(connection,callback){
    connection.query("SELECT * FROM noticias",callback);
}
Noticias.prototype.getNoticia=function(connection,callback){
    connection.query("SELECT * FROM noticias where id=1",callback);
}
Noticias.prototype.postNoticias=function(noticia,connection,callback){
    connection.query("insert into noticias set ?",noticia,callback);
}

module.exports=function(){
    return Noticias
}