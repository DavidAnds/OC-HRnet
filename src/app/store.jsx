import { configureStore } from "@reduxjs/toolkit"
import employeesReducer from "../features/Employees/EmployeesSlice"

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
})
