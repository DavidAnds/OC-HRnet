import { createSlice } from "@reduxjs/toolkit"

export const employeesSlice = createSlice({
  name: "employees",
  initialState: [],
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload)
    },
  },
})

export const { addEmployee } = employeesSlice.actions
export default employeesSlice.reducer
