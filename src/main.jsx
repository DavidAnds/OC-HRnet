import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import EmployeeCreate from "./pages/EmployeeCreate.jsx"
import EmployeeList from "./pages/Employee.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { store } from "./app/store"
import "./index.css"

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <EmployeeList />,
  },
  {
    path: "/create",
    element: <EmployeeCreate />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={browserRouter} />
    </Provider>
  </React.StrictMode>
)
