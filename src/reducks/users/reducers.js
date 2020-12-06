import * as Actions from './action'
import initialstate from '../store/initialstate'

export const UsersReducer = (state = initialstate.users, action) => {
    switch (action.type) {
        case Actions.SIGN_IN:
            return {
                ...state,
                ...action.payload
            };
        case Actions.SIGN_OUT:
            return {
                ...action.payload
            };
        default:
            return state
    }
}
