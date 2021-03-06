var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    console.log("controller get");
    burger.selectAll(function (data) {
        var hsbObject = {
            burgers: data
        };
        console.log(hsbObject);
        res.render("index", hsbObject);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log("controller post");
    if (req.body.burger_name !== "") {
        burger.insertOne(
            req.body.burger_name, function (result) {
                // Send back the ID of the new quote
                res.json({ id: result.id });
            });
    }
});

router.put("/:id", function(req, res) {
	console.log(req.params.id);
    console.log("controller put");
	burger.updateOne(req.params.id, function() {
		res.status(200).end();
	});
});

module.exports = router;