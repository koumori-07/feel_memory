import initialState from '../store/initialstate'
import * as Action from './action'
export const ArticlesReducer = (state = initialState.articles, action) => {
    switch (action.type) {
        case Action.NEW_ARTICLE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}