export const FETCH_ARTICLES = "FETCH_ARTICLES";
export const fetchArticleAction = (articles) => {
    return {
        type: "FETCH_ARTICLES",
        payload: articles
    }
};