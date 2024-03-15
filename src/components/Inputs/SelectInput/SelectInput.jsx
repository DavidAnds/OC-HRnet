import React from "react"
import { useController } from "react-hook-form"
import { InputLabel } from "@mui/material"
import { SelectInput as SelectInputLib } from "select-input-lib"
import styles from "../Inputs.module.css"

function SelectInput({ control, label, options, name, defaultValue = "" }) {
  const { field } = useController({ control, name, defaultValue })

  return (
    <div className={styles.container}>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <SelectInputLib {...field} options={options} />
    </div>
  )
}

export default SelectInput
