import { createSelector } from "reselect";

const usersSelector = (state) => state.users;

export const getSignedIn = createSelector(
  [usersSelector],
  state => state.isSignedIn
)
export const getUserId = createSelector(
  [usersSelector],
  state => state.uid
)
export const getUserName = createSelector(
  [usersSelector],
  state => state.username
)
export const getCreatedAt = createSelector(
  [usersSelector],
  state => state.createdAt
)
export const getSpot = createSelector(
  [usersSelector],
  state => state.spot
)
export const getGoal = createSelector(
  [usersSelector],
  state => state.goal
)