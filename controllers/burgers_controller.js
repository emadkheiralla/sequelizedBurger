var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var burger = require('../models/burger.js');

var router = express.Router();

router.get('/', function(req, res){
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	burger.all(function (data) {
		var hbsobject = { burgers: data };
		console.log(hbsobject);
		res.render('index', hbsobject);
	});
});

router.post('/burgers/create', function (req, res) {
	burger.create(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function () {
		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition: ', condition);

	burger.update({ devoured: req.body.devoured }, condition, function () {
		res.redirect('/burgers');
	});
});

router.delete('/burgers/delete/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	burgers.delete(condition, function () {
		res.redirect('/burgers');
	});
});

module.exports = router;