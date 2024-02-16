import { TextInput } from "../components/Inputs"
import { useForm } from "react-hook-form"

function EmployeeList() {
  const { control, handleSubmit } = useForm()

  return (
    <div>
      <TextInput control={control} name="name" label="Name" />
    </div>
  )
}

export default EmployeeList
