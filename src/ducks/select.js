import { createSlice } from "redux-starter-kit"

const select = createSlice({
  slice: "select",
  initialState: {},
  reducers: {
    selectProject: (state, action) => ({ project: action.payload.selected })
  }
})

export { select }