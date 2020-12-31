export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState) => {
    return {
        type: "SIGN_IN",
        payload: userState
    }
};
export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => {
    return {
        type: "SIGN_OUT",
        payload: {
            isSignedIn: false,
            role: "",
            uid: "",
            username: "",
            spot: "",
            goal: ""
        }
    }
};
export const FETCH_PROFILE_ACTION = "FETCH_PROFILE_ACTION";
export const fetchProfileAction = (profile) => {
    return {
        type: "FETCH_PROFILE_ACTION",
        payload: profile
    }
}
export const DELETE_USER = "DELETE_USER";
export const deleteUserAction = (userState) => {
    return {
        type: "DELETE_USER",
        payload:userState
    }
}