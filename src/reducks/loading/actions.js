export const HIDE_LOADING = "HIDE_LOADING";
export const hideLoadingAction = () => {
    return {
        type: "HIDE_LOADING",
        payload: {
            state: false,
            text: ""
        }
    }
};