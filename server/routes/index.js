
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

router.post('/api/articles/saveComment', function(req, res){

  const data = req.body;

  let errors = {};
  
  if(data.name === '')
      errors.name = "Name can't be empty";
  if(data.email === '')
      errors.email = "Email can't be empty";
  if(data.body === '')
      errors.body = "Body can't be empty";

  const isValid = Object.keys(errors).length === 0; 
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
  
router.put('/api/articles/updateCategory/:id', function(req, res){
  
  const id = req.params.id;
  const data = req.body;

  let errors = {};
  
  if(data.title === '')
      errors.title = "Title can't be empty";

  if(data.importance === '')
      errors.importance = "Importance can't be empty";

  if(data.description === '')
      errors.description = "Description can't be empty";

  const isValid = Object.keys(errors).length === 0; 
  if(isValid){
      const { title, importance, description } = req.body;
      //Save to db here...
      //Then successful response:
      res.json({ category : req.body });
  } else {
      res.status(404).json({ errors });
  }
});

router.post('/api/articles/saveCategory', function(req, res){
    
  const data = req.body;
  let errors = {};
  
  if(data.title === '')
      errors.title = "Title can't be empty";

  if(data.importance === '')
      errors.importance = "Importance can't be empty";

  if(data.description === '')
      errors.description = "Description can't be empty";

  const isValid = Object.keys(errors).length === 0; 
  if(isValid){
      const { title, importance, description } = data;
      //Save to db here...
      //Then successful response:
      res.json({ category: { title, importance, description } });
  } else {
      res.status(404).json({ errors });
  }
});

  
router.put('/api/articles/updateArticle/:id', function(req, res){
  
    const id = req.params.id;
    const data = req.body;
  
    let errors = {};
    
    if(data.title === '')
        errors.title = "Title can't be empty";
  
    if(data.abstract === '')
        errors.abstract = "Abstract can't be empty";
  
    if(data.body === '')
        errors.body = "Body can't be empty";
  
    if(data.city === '')
        errors.city = "City can't be empty";
  
    if(data.country === '')
        errors.country = "Country can't be empty";
  
    const isValid = Object.keys(errors).length === 0; 
    if(isValid){
        const { title, importance, description } = req.body;
        //Save to db here...
        //Then successful response:
        res.json({ article : req.body });
    } else {
        res.status(404).json({ errors });
    }
});
  
  router.post('/api/articles/saveArticle', function(req, res){
      
    const data = req.body;
    let errors = {};
    
    if(data.title === '')
        errors.title = "Title can't be empty";
  
    if(data.abstract === '')
        errors.abstract = "Abstract can't be empty";
  
    if(data.body === '')
        errors.body = "Body can't be empty";
  
    if(data.city === '')
        errors.city = "City can't be empty";
  
    if(data.country === '')
        errors.country = "Country can't be empty";
  
    const isValid = Object.keys(errors).length === 0; 
    if(isValid){
        const { title, abstract, body, city, country } = data;
        //Save to db here...
        //Then successful response:
        res.json({ article: req.body });
    } else {
        res.status(404).json({ errors });
    }
});

router.get('/api/articles/fetchCategory/:id', function(req, res, next) {
  
  const testData = { id: 1, title: "ahahah", description: "asdfffffffffffgbczmx xzcxc hjdksfsd sd", importance: 4 };     
  res.json(testData);
});

module.exports = router;