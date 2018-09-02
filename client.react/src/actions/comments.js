import { handleResponse } from './actionBase';

export const ADD_COMMENT = "ADD_COMMENT";

export function addComment(comment) {

    return {
        type : ADD_COMMENT,
        payload: comment
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