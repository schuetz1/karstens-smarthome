var express = require('express');
var router = express.Router();

/* Add routes for node.js */
router.get('/', function (req, res) {
    res.render('index', {title: 'Hey', message: 'Hello there!'});
});

module.exports = router;
