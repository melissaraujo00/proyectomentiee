const mysql2 =require('mysql2');

const conexion = mysql2.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'proyecto',
    user: 'root',
    password: 'my-secret-pw'
});

conexion.connect(function(error){
    if (error) {
        throw error;
    }else{
        console.log('CONEXION EXITOSA');
    }

});

conexion.end();