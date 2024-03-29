import React from "react"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { InputLabel } from "@mui/material"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/"
import { useController } from "react-hook-form"
import styles from "../Inputs.module.css"

function DatePickerInput({ control, name, label, defaultValue, required = false }) {
  const { field } = useController({ control, name, defaultValue, rules: { required } })

  return (
    <div className={styles.container}>
      {label && (
        <InputLabel htmlFor={name}>
          {required ? "*" : ""}
          {label}
        </InputLabel>
      )}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker {...field} />
      </LocalizationProvider>
    </div>
  )
}

export default DatePickerInput
