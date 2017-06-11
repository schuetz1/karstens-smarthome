var express = require('express');
var router = express.Router();

//Add routes for angular to get them.
router.get('/:view', function(req, res) {

    var view = req.params.view;
    res.render('partials/' + view);

});

module.exports = router;
