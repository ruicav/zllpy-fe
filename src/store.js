import { configureStore, getDefaultMiddleware } from "redux-starter-kit"
import { combineReducers } from "redux"
import { projects, timekeepers, auth, select } from "./ducks"

const preloadedState = {}

const reducer = combineReducers({
  projects: projects.reducer,
  timekeepers: timekeepers.reducer,
  auth: auth.reducer,
  select: select.reducer
})

const middleware = [...getDefaultMiddleware()];

export const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
  preloadedState
})