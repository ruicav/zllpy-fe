import { createSlice } from "redux-starter-kit"

const timekeepers = createSlice({
  slice: "timekeepers",
  initialState: [],
  reducers: {
    setTimekeepers: (state, action) => [...action.payload.timekeepers],
	}
})

export { timekeepers }