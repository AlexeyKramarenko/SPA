
var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

const dbUrl = 'mongodb://localhost:21027/articles_db';

mongodb.MongoClient.connect(dbUrl, function(err, db){
    
    router.get('/api/articles/fetchCategories', function(req, res, next) {
    
        db.collection('categories')
          .find({})
          .toArray((err, categories) => {
                
                res.json({ categories });
        }); 
    });
  
    router.get('/api/articles/fetchArticles/:id', function(req, res, next) {
    
        db.collection('articles')
          .find({ categoryId : new mongodb.ObjectId(req.params.id)})
          .toArray((err, articles) => {

               res.json({ articles });
        }); 
    });
  
    router.get('/api/articles/fetchArticle/:id', function(req, res, next) {
    
        db.collection('articles')
          .findOne({ _id : new mongodb.ObjectId(req.params.id)})
          .toArray((err, article) => {
              
               res.json({ article });
        });
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
        if(isValid) {

            const { name, email, body, articleId } = req.body;
            
            db.collection('comments').insert({ name, email, body, articleId }, (err, result) => {

                if (err) {
                    res.status(404).json({ errors : { global: "Something went wrong" }});
                }
                else {
                    res.json({ comments : result.ops[0] });
                }
            });

        } else {
            res.status(404).json({ errors });
        }
    });
  
    router.delete('/api/articles/deleteCategory/:id', function(req, res) {
        
        db.collection('categories').deleteOne({ _id: new mongodb.ObjectId(req.params.id)}, (err, r) =>{
            if(err){
                res.status(500).json({ errors: { global : err }});
                return;
            }
        });

        res.json({});  
    });
    
    router.delete('/api/articles/deleteArticle/:id', function(req, res) {
        
        db.collection('articles').deleteOne({ _id: new mongodb.ObjectId(req.params.id)}, (err, r) =>{
            if(err){
                res.status(500).json({ errors: { global : err }});
                return;
            }
        });

        res.json({});    
    });
        
    router.put('/api/articles/updateCategory/:id', function(req, res){
         
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
            db.collection('categories').findOneAndUpdate(
                { _id: new mongodb.ObjectId(req.params.id) },
                { $set: { title, importance, description } },
                { returnOriginal: false },
                (err, result) => {
                    if(err) {
                        res.status(500).json({ errors: { global: err }});
                        return; 
                    }
                    res.json({ category: result.value });
                } 
            ); 
            
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
        if(isValid) {
            
            const { title, importance, description } = data;

            db.collection('categories').insert({ title, importance, description }, (err, result) => {
                if(err) {
                    res.status(500).json({ errors: { global: "Something went wrong" }});
                } else {
                    res.json({ category: result.ops[0] });
                }
            });

        } else {
            res.status(404).json({ errors });
        }
    });
    
        
    router.put('/api/articles/updateArticle/:id', function(req, res){
         
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
            const { title, abstract, body, city, country } = req.body;
            db.collection('articles').findOneAndUpdate(
                { _id: new mongodb.ObjectId(req.params.id) },
                { $set: { title, abstract, body, city, country } },
                { returnOriginal: false },
                (err, result) => {
                    if(err) {
                        res.status(500).json({ errors: { global: err }});
                        return; 
                    }
                    res.json({ article: result.value });
                } 
            ); 

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
            db.collection('articles').insert({ title, abstract, body, city, country }, (err, result) => {
                if(err) {
                    res.status(500).json({ errors: { global: "Something went wrong" }});
                } else {
                    res.json({ article: result.ops[0] });
                }
            });
        } else {
            res.json({ article : result.ops[0] });
      }
    });
  
    router.get('/api/articles/fetchCategory/:id', function(req, res, next) {
        
        db.collection('categories')
          .findOne({ _id : new mongodb.ObjectId(req.params.id)})
          .toArray((err, category) => {
              
               res.json({ category });
        });
    });
})


module.exports = router;