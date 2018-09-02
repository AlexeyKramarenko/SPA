
import { handleResponse } from './actionBase';

export const SET_ARTICLES = "SET_ARTICLES";
export const SET_ARTICLE = "SET_ARTICLE"; 
export const ARTICLE_DELETED = "ARTICLE_DELETED";

export function setArticles(articles) {   
    
    return {
        type: SET_ARTICLES,
        articles
    }
}

export function setArticle(article) {   
    
    return {
        type: SET_ARTICLE,
        article
    }
}
  
export function articleDeleted(articleId){

    return {
        type : ARTICLE_DELETED,
        articleId
    }    
}
 
export function fetchArticles(categoryId) {
    
    return dispatch => {
        fetch(`/api/articles/fetchArticles/${categoryId}`)
            .then(res => res.json())  
            .then(data => dispatch(setArticles(data)));
    }
}

export function fetchArticle(articleId) {
    
    return dispatch => {
        fetch(`/api/articles/fetchArticle/${articleId}`)
            .then(res => res.json())  
            .then(data => dispatch(setArticle(data)));
    }
}
  
export function deleteArticle(id) {
    
    return dispatch =>{
        return fetch(`/api/articles/deleteArticle/${id}`, {
            method: 'delete',            
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(handleResponse)
        .then(data => dispatch(articleDeleted(id))); 
    }
} 