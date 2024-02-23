import { Link } from "react-router-dom"
import CreateEmployee from "../features/Employees/CreateEmployee"

function EmployeeCreate() {
  return (
    <div>
      <div>
        <Link to="/">View Current Employee</Link>
        <h1>Create Employee</h1>
      </div>
      <CreateEmployee />
    </div>
  )
}

export default EmployeeCreate
