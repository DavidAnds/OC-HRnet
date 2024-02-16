import { useController } from "react-hook-form"
import { TextField, InputLabel } from "@mui/material"
import styles from "../Inputs.module.css"

function TextInput({ control, name, label, defaultValue = "" }) {
  const { field } = useController({ control, name, defaultValue })

  return (
    <div className={styles.container}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <TextField size="small" {...field} id={name} fullWidth />
    </div>
  )
}

export default TextInput
