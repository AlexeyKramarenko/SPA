
export const SET_CATEGORIES = "SET_CATEGORIES";

export function setCategories(categories) {   
    
    return {
        type: SET_CATEGORIES,
        categories
    }
}

export function fetchCategories() {
    
    return dispatch => {
        fetch(`/api/articles/fetchCategories`)
            .then(res => res.json())  
            .then(data => dispatch(setCategories(data)));
    }
}