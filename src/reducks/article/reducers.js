import initialState from '../store/initialstate'
import * as Action from './action'

export const ArticlesReducer = (state = initialState.articles, action) => {
    switch (action.type) {
        case Action.FETCH_ARTICLES:
            return {
                ...state,
                list: [...action.payload]
            };
            case Action.DELETE_ARTICLE:
            return {
                ...state,
                list: action.payload
            };
        default:
            return state
    }
}