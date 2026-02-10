const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql',
    port: 3307
})

module.exports = pool

//sistema de cache que otimiza a conexao com servidor e banco de dados