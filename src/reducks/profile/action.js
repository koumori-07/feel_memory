export const CREATE_PROFILE = "CREATE_PROFILE";
export const fetchProfile = (profileList) => {
    return {
        type: "CREATE_PROFILE",
        payload: profileList
    }
};