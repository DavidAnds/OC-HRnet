import React from "react"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"

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

  // Ajouter des mocks data
  // Ajouter une search Bar pour filtrer les données

  return (
    <div>
      <DataGrid
        rows={rows}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </div>
  )
}

export default EmployeeGrid
