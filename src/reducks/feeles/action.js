export const FETCH_FEELES = "FETCH_FEELES";
export const fetchFeelAction = (feeles) => {
    return {
        type: "FETCH_FEELES",
        payload: feeles
    }
};
export const DELETE_FEEL = "DELETE_FEEL";
export const deleteFeelAction = (feeles) => {
    return {
        type: "DELETE_FEEL",
        payload:feeles
    }
}