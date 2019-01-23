const connection = require(`../config/connection.js`);

function ORM(table){
    this.table = table;

    this.all = function () {

        return new Promise (function (resolve, reject){
            connection.query(`SELECT * FROM ??`, table, function (err, data){
                if (err) reject (err);
                resolve(data);
            });
        })
    },

    this.create = function (name, devoured) {

        return new Promise (function (resolve, reject){
            connection.query(`INSERT INTO ?? (name, devoured) VALUES (?, ?)`, [table, name, devoured],
            function (err, data) {
                if (err) reject (err);
                resolve(data);

            })
        })
    },

    this.update = function (devoured, id) {

        return new Promise(function (resolve, reject){
            connection.query (`UPDATE ?? SET devoured = ?`, [table, devoured], function (err, data){
                if (err) reject (err);
                resolve(data);
            });
        })
    }

    this.delete= function(id){
       
        return new Promise(function(resolve, reject){
            connection.query(`DELETE FROM ?? WHERE id = ?`, [table, id], function (err, data){
                if (err) reject(err);
                resolve(data);
            })

        })
    }
} 

module.exports = ORM;