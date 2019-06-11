import { createSlice } from "redux-starter-kit"

const projects = createSlice({
  slice: "projects",
  initialState: [],
  reducers: {
    setProjects: (state, action) => [...action.payload.projects]
  }
})

export { projects }