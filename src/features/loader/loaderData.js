import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {setLoader} = loaderSlice.actions

export default loaderSlice.reducer