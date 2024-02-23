import { Link } from "react-router-dom"
import ViewEmployee from "../features/Employees/ViewEmployee"

function EmployeeList() {
  return (
    <div>
      <h1>Current Employees</h1>
      <ViewEmployee />
      <Link to="/create">Home</Link>
    </div>
  )
}

export default EmployeeList
