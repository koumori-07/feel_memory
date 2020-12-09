import { createSelector } from "reselect"

const articleSelector = (state) => state.articles;

export const getArticles = createSelector(
    [articleSelector],
    state => state.list
)