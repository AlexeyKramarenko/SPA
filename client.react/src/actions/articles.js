
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_ARTICLES = "SET_ARTICLES";
export const SET_ARTICLE = "SET_ARTICLE";
export const ADD_COMMENT = "ADD_COMMENT";
export const CATEGORY_DELETED = "CATEGORY_DELETED";

export function setCategories(categories) {   
    
    return {
        type: SET_CATEGORIES,
        categories
    }
}

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
 
export function addComment(comment) {

    return {
        type : ADD_COMMENT,
        comment
    }
}

export function categoryDeleted(categoryId){

    return {
        type : CATEGORY_DELETED,
        categoryId
    }    
}

export function fetchCategories() {
    
    return dispatch => {
        fetch(`/api/articles/fetchCategories`)
            .then(res => res.json())  
            .then(data => dispatch(setCategories(data)));
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

function handleResponse(response){
    if(response.ok){
        return response.json();
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

export function saveComment(data) {
    
    return dispatch =>{
        return fetch('/api/articles/saveComment', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(handleResponse)
        .then(data => dispatch(addComment(data.comment))); 
    }
} 

export function deleteCategory(id) {
    
    return dispatch =>{
        return fetch(`/api/articles/deleteCategory/${id}`, {
            method: 'delete',            
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(handleResponse)
        .then(data => dispatch(categoryDeleted(id))); 
    }
} 