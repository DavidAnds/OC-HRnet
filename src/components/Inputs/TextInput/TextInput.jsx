import { useController } from "react-hook-form"
import { TextField, InputLabel } from "@mui/material"
import styles from "../Inputs.module.css"

function TextInput({ control, name, label, defaultValue = "", required = false }) {
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
      <TextField size="small" {...field} id={name} fullWidth />
    </div>
  )
}

export default TextInput
