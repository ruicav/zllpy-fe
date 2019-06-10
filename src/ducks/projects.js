import { createSlice } from "redux-starter-kit"

const setProjects = (state, action) => [...action.payload.projects]

const projects = createSlice({
  slice: "projects",
  initialState: [],
  reducers: {
    setProjects: setProjects
  }
})

export { projects }