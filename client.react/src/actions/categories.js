import { handleResponse } from './actionBase';

export const SET_CATEGORIES = "SET_CATEGORIES";
export const CATEGORY_DELETED = "CATEGORY_DELETED";
 
export function setCategories(categories) {   
    
    return {
        type: SET_CATEGORIES,
        payload: categories
    }
}
 
export function categoryDeleted(categoryId){

    return {
        type : CATEGORY_DELETED,
        payload: categoryId
    }    
}
 
export function fetchCategories() {
    
    return dispatch => {
        fetch(`/api/articles/fetchCategories`)
            .then(res => res.json())  
            .then(data => dispatch(setCategories(data)));
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