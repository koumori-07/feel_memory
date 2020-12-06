import { createSelector } from "reselect"

const articleSelector = (state) => state.articles;

export const getArticleTitle = createSelector(
    [articleSelector],
    state => state.title
)