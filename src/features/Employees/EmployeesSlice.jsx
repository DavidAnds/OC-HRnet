import { createSlice } from "@reduxjs/toolkit"

const mockEmployees = [
  {
    firstName: "Fitiavana David",
    lastName: "Andriason Rakotondratsimba",
    dateOfBirth: "1999-06-04T22:00:00.000Z",
    startDate: "2024-03-18T23:00:00.000Z",
    street: "Rue De Charenton, 75012 Paris, France",
    city: "Paris",
    state: "GA",
    zipCode: "75012",
    department: "Human Resources",
    id: 1,
  },
  {
    firstName: "Robert",
    lastName: "Smith",
    dateOfBirth: "1999-06-04T22:00:00.000Z",
    startDate: "2024-03-18T23:00:00.000Z",
    street: "Mozaik, 75012 Paris, France",
    city: "Paris",
    state: "SL",
    zipCode: "75012",
    department: "Engineering",
    id: 2,
  },
  {
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "2001-06-04T22:00:00.000Z",
    startDate: "2024-03-18T23:00:00.000Z",
    street: "Rue De Meaux, 75012 Paris, France",
    city: "Paris",
    state: "GA",
    zipCode: "75012",
    department: "Sales",
    id: 3,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    dateOfBirth: "1999-06-04T22:00:00.000Z",
    startDate: "2024-03-18T23:00:00.000Z",
    street: "Rue 75012 Paris, France",
    city: "Paris",
    state: "GA",
    zipCode: "75012",
    department: "Marketing",
    id: 4,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    dateOfBirth: "1999-06-04T22:00:00.000Z",
    startDate: "2024-03-18T23:00:00.000Z",
    street: "Rue De Charenton, 75019 Paris, France",
    city: "Paris",
    state: "FL",
    zipCode: "75019",
    department: "Legal",
    id: 5,
  },
]

export const employeesSlice = createSlice({
  name: "employees",
  initialState: mockEmployees,
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload)
    },
  },
})

export const { addEmployee } = employeesSlice.actions
export default employeesSlice.reducer
