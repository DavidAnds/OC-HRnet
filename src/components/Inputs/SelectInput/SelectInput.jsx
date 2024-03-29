import React from "react"
import { useController } from "react-hook-form"
import { InputLabel } from "@mui/material"
import { SelectInput as SelectInputLib } from "select-input-lib"
import styles from "../Inputs.module.css"

function SelectInput({ control, label, options, name, defaultValue = "", required = false }) {
  const { field } = useController({ control, name, defaultValue, rules: { required } })

  return (
    <div className={styles.container}>
      {label && (
        <InputLabel htmlFor={name}>
          {" "}
          {required ? "*" : ""}
          {label}
        </InputLabel>
      )}
      <SelectInputLib {...field} options={options} />
    </div>
  )
}

export default SelectInput
