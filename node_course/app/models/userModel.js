module.exports=function(){
    this.postUser=function(user,connection,callback){
        connection.query("insert into user set ?",user,callback);
    }

    this.getUser=function(connection,callback){
        connection.query("select * from user",callback);
    }
    return this
}