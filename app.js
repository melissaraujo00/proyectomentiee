import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

<<<<<<< HEAD

// database.js
=======
>>>>>>> origin/dev
dotenv.config();

const conexion = mysql.createPool({
    host: 'localhost',
    port: 3306,
    database: 'proyecto',
    user: 'root',
    password: 'my-secret-pw',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

<<<<<<< HEAD



=======
>>>>>>> origin/dev
export default conexion;
