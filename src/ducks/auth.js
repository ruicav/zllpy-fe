import { createSlice } from "redux-starter-kit"

const auth = createSlice({
  slice: "auth",
  initialState: { token: null },
  reducers: {
    setToken: (state, action) => ({ token: action.payload.token }),
	}
})

export { auth }