
var express = require('express');
var router = express.Router();

router.get('/api/articles/fetchCategories', function(req, res, next) {

  const testData = [{ id: 1, title: "one" }, { id: 2, title: "two" }];
	res.json(testData);
});

module.exports = router;