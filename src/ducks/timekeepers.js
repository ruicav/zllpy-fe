import { createSlice } from "redux-starter-kit"

const setTimekeepers = (state, action) => [...action.payload.timekeepers]

const timekeepers = createSlice({
  slice: "timekeepers",
  initialState: [],
  reducers: {
    setTimekeepers: setTimekeepers,
	}
})

export { timekeepers }