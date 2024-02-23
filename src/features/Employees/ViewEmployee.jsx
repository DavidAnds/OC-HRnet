import React from "react"
import EmployeeGrid from "../../components/EmployeeGrid/EmployeeGrid"
import { useSelector } from "react-redux"

function ViewEmployee() {
  const employees = useSelector((state) => state.employees)

  return (
    <>
      <EmployeeGrid rows={employees} />
    </>
  )
}

export default ViewEmployee
