import React from "react"
import { DataGrid } from "@mui/x-data-grid"

function EmployeeGrid({ rows = [] }) {
  const columns = [
    { field: "firstName", headerName: "First Name" },
    { field: "lastName", headerName: "Last Name" },
    { field: "startDate", headerName: "Start Date" },
    { field: "department", headerName: "Department" },
    { field: "dateOfBirth", headerName: "Date of Birth" },
    { field: "street", headerName: "Street" },
    { field: "city", headerName: "City" },
    { field: "state", headerName: "State" },
    { field: "zipCode", headerName: "Zip Code" },
  ]

  return (
    <div>
      <DataGrid rows={rows} columns={columns} />
    </div>
  )
}

export default EmployeeGrid
