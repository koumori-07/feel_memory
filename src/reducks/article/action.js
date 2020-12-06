export const NEW_ARTICLE = "NEW_ARTICLE";
export const newArticleAction = (articleState) => {
    return {
        type: "NEW_ARTICLE",
        payload: articleState
    }
};