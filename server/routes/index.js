
var express = require('express');
var router = express.Router();

router.get('/api/articles/fetchCategories', function(req, res, next) {

  const testData = [{ id: 1, title: "one", description: "Some description...(1)" }, { id: 2, title: "two", description: "Some description...(2)" }];
	res.json(testData);
});

router.get('/api/articles/fetchArticles/:id', function(req, res, next) {
  
  const testData =[
    { id: 1, title: "ahahah", addedBy: "John", abstract: "..some text 1" },
    { id: 2, title: "hihihi", addedBy: "David", abstract: "..some text 2" }];
  
  res.json(testData);
});

router.get('/api/articles/fetchArticle/:id', function(req, res, next) {
  
  const testData = { id: 1, title: "ahahah", body: "asdfffffffffffgbczmx xzcxc hjdksfsd sd" };     
  res.json(testData);
});

function validate(data){
    
  let errors = {};
  
  if(data.name === '')
      errors.name = "Name can't be empty";
  if(data.email === '')
      errors.email = "Email can't be empty";
  if(data.body === '')
      errors.body = "Body can't be empty";

  const isValid = Object.keys(errors).length === 0;
  return { errors, isValid };
}

router.post('/api/articles/saveComment', function(req, res){

  const { errors, isValid } = validate(req.body);

  if(isValid){
      const { name, email, body, articleId } = req.body;
      //Save to db here...
      //Then successful response:
      res.json({ comment:{ name, email, body, articleId } });
  } else {
      res.status(404).json({ errors });
  }
});

router.delete('/api/articles/deleteCategory/:id', function(req, res) {
  
  res.json({ id : req.params.id });  
});

router.delete('/api/articles/deleteArticle/:id', function(req, res) {
  
  res.json({ id : req.params.id });  
});

module.exports = router;