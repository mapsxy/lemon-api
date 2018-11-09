/*
 * @Author: xuying 
 * @Date: 2018-11-09 10:20:46 
 * @Last Modified by: xuying
 * @Last Modified time: 2018-11-09 11:06:12
 */

var mysql = require('mysql');

var config = {
    host: 'localhost',
    pport: '3306',
    user: 'root',
    password: '123456',
    database: 'lemon',
    connectionLimit: 100
}

var pool = mysql.createPool(config);

module.exports = function(sql, query, fn) {
    fn = fn ? fn : query;
    query = query || [];

    function connectionCallback(error, con) {
        if (error) {
            fn(error)
        } else {
            con.query(sql, query, function() {
                con.release();
                queryCallback(err, results);
            })
        }
    }

    function queryCallback(err, results) {
        if (err) {
            fn(err)
        } else {
            fn(null, results)
        }
    }

    pool.getConnection(connectionCallback);
}