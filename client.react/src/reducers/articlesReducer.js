
import { SET_ARTICLES, SET_ARTICLE, ARTICLE_DELETED } from '../actions/articles';

export default function articlesReducer(state = [], action = {}){
    
    switch(action.type){
 
        case SET_ARTICLES: 
            return { ...state, articles: action.articles };

        case SET_ARTICLE:  
            return { ...state, article: action.article };
 
        case ARTICLE_DELETED: 
            return { ...state, articles: state.articles.filter(item => item.id !== action.articleId) };
 
        default:
            return state;        
    } 
}