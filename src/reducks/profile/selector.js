import { createSelector } from "reselect"

const profileSelector = (state) => state.profile;

export const getProfile = createSelector(
    [profileSelector],
    state => state.list
)


