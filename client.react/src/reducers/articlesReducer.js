

import { SET_CATEGORIES } from '../actions/articles';

export default function articlesReducer(state = [], action = {}){
    
    switch(action.type){

        case SET_CATEGORIES: 
            return action.categories;

        default:
            return state;
        
    } 
}