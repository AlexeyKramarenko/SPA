
import { handleResponse } from './actionBase';

export const SET_ARTICLES = "SET_ARTICLES";
export const SET_ARTICLE = "SET_ARTICLE"; 
export const ARTICLE_DELETED = "ARTICLE_DELETED";
export const ARTICLE_UPDATED = "ARTICLE_UPDATED";
export const ARTICLE_ADDED = "ARTICLE_ADDED";
  
export function setArticles(articles) {   
    
    return {
        type: SET_ARTICLES,
        payload: articles
    }
}

export function setArticle(article) {   
    
    return {
        type: SET_ARTICLE,
        payload: article
    }
}
  
export function articleDeleted(articleId){

    return {
        type : ARTICLE_DELETED,
        payload: articleId
    }    
}
 
export function articleSaved(article){

    return {
        type : ARTICLE_ADDED,
        payload: article
    }
}

export function articleUpdated(article){

    return {
        type : ARTICLE_UPDATED,
        payload: article
    }
}

 
export function fetchArticles(articleId) {
    
    return dispatch => {
        fetch(`/api/articles/fetchArticles/${articleId}`)
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

export function saveArticle(data){

    return dispatch =>{
        return fetch('/api/articles/saveArticle', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(handleResponse)
        .then(data => dispatch(articleSaved(data.article))); 
    }
}

export function updateArticle(data){

    return dispatch => {
        return fetch(`/api/articles/updateArticle/${data.id}`, {
            method: 'put',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(handleResponse)
        .then(data => dispatch(articleUpdated(data.article))); 
    }
}