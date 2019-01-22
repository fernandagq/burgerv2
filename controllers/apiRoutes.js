const burger = require("../models/burger.js");

module.exports = function(app){
    app.post("/api/burgers", function (req, res){
        burger.create(req.body.name, req.body.devoured)
        .then(function(data) {
            res.json({ id: data.insertId });

        })
        .catch(function(err){
            console.log(err);
        });
    });

    app.put("/api/burgers/:id", function(req, res){
        let devoured = (req.body.devoured == "true");
        burger.update(devoured, req.params.id)
        .then(function(data){
            if (data.changedRows == 0){
                return res.status(404).end();
            }else {
                res.status(200).end();
            }
        })
        .catch(function(err){
            console.log(err);
        });
    });

    app.delete("/api/burgers/:id", function(req, res) {
        burger.delete(req.params.id)
        .then(function(data){
            if (data.affectedRows == 0) {
                return res.status(404).end();
            }else {
                res.status(200).end();
            }
        })
        .catch(function(err){
            console.log(err);
        });
    });
}