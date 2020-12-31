import initialState from '../store/initialstate'
import * as Action from './action'

export const ProfileReducer = (state = initialState.profile, action) => {
    switch (action.type) {
        case Action.CREATE_PROFILE:
            return {
                ...state,
                list:[...action.payload]
            }
        default:
            return state
    }
}