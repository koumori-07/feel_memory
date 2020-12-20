import { createSelector } from "reselect"

const feelesSelector = (state) => state.feeles;

export const getFeeles = createSelector(
    [feelesSelector],
    state => state.list
)
