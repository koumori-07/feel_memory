export const FETCH_ARTICLES = "FETCH_ARTICLES";
export const fetchArticleAction = (articles) => {
    return {
        type: "FETCH_ARTICLES",
        payload: articles
    }
};
export const DELETE_ARTICLE = "DELETE_ARTICLE";
export const deleteArticleAction = (artciles) => {
    return {
        type: "DELETE_ARTICLE",
        payload:artciles
    }
}