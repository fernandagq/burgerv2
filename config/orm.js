const connection = require(`../config/connection.js`);

function ORM(table){
    this.table = table;

    this.all = function () {
        const sql = `SELECT * FROM ??`;

        return new Promise (function (resolve, reject){
            connection.query(sql, table, function (err, data){
                if (err) reject (err);
                resolve(data);
            });
        })
    },

    this.create = function (name, devoured) {
        const sql = `INSERT INTO ?? (name, devoured) VALUES (?, ?)`;

        return new Promise (function (resolve, reject){
            connection.query(sql, [table, name, devoured],
            function (err, data) {
                if (err) reject (err);
                resolve(data);

            })
        })
    },

    this.update = function (devoured, id) {
        const sql = `UPDATE ?? SET devoured = ?`;

        return new Promise(function (resolve, reject){
            connection.query (sql, [table, devoured], function (err, data){
                if (err) reject (err);
                resolve(data);
            });
        })
    }

    this.delete= function(id){
        const sql = `DELETE FROM ?? WHERE id = ?`;

        return new Promise(function(resolve, reject){
            connection.query(sql, [table, id], function (err, data){
                if (err) reject(err);
                resolve(data);
            })

        })
    }
} 

module.exports = ORM;