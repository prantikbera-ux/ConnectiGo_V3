const mariadb = require("mariadb")

const pool = mariadb.createPool({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
    connectionLimit : 5
});


///connect and check for error

pool.getConnection((err,connection)=>{
       if(err){
           if(err.code === 'PROTOCOL_CONNECTION_LOST'){
               console.error('database connection lost');
           }
       }

       if(err){
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('database has many connection');
        }
    }

    if(err){
        if(err.code === 'ECONREFUSED'){
            console.error('database connection refused');
        }
    }

   if(connection) connection.release();


   return;
})



module.exports = pool;