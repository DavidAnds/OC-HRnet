import { Link } from "react-router-dom"
import CreateEmployee from "../features/Employees/CreateEmployee"

function EmployeeCreate() {
  return (
    <div className="container">
      <div>
        <h1>HRnet</h1>
        <Link to="/employees" className="link_top">
          View Current Employee
        </Link>
        <h2>Create Employee</h2>
      </div>
      <CreateEmployee />
    </div>
  )
}

export default EmployeeCreate
