
import { SET_CATEGORIES, CATEGORY_DELETED } from '../actions/categories';

export default function categoriesReducer(state = [], action = {}){
    
    switch(action.type){

        case SET_CATEGORIES:   
            return { ...state, categories: action.categories };
        
        case CATEGORY_DELETED: 
            return { ...state, categories: state.categories.filter(item => item.id !== action.categoryId) };
 
        default:
            return state;
        
    } 
}