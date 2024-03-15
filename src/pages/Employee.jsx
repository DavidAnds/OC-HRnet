import { Link } from "react-router-dom"
import ViewEmployee from "../features/Employees/ViewEmployee"

function EmployeeList() {
  return (
    <div className="container">
      <h1>Current Employees</h1>
      <ViewEmployee />
      <Link to="/" className="link">
        Home
      </Link>
    </div>
  )
}

export default EmployeeList
