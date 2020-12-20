import initialstate from '../store/initialstate'
import * as Action from './action'

export const FeelesReducer = (state = initialstate.feeles, action) => {
    switch (action.type) {
        case Action.FETCH_FEELES:
            return {
                ...state,
                list: [...action.payload]
            };
        case Action.DELETE_FEEL:
            return {
                ...state,
                list: action.payload
            };
        default:
            return state
    }
}