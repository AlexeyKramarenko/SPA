

import { SET_CATEGORIES, SET_ARTICLES, SET_ARTICLE, ADD_COMMENT, CATEGORY_DELETED, ARTICLE_DELETED } from '../actions/articles';

export default function articlesReducer(state = [], action = {}){
    
    switch(action.type){

        case SET_CATEGORIES: 
            return action.categories;
        
        case SET_ARTICLES: 
            return action.articles;

        case SET_ARTICLE: 
            return action.article;

        case ADD_COMMENT: 
            return [ ...state, action.comment ];
 
        case CATEGORY_DELETED: 
            return state.filter(item => item.id !== action.categoryId);
 
        case ARTICLE_DELETED: 
            return state.filter(item => item.id !== action.articleId);
 
        default:
            return state;
        
    } 
}