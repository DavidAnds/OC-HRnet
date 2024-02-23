import { useState } from "react"
import { useForm } from "react-hook-form"
import DatePickerInput from "../../components/Inputs/DatePickerInput/DatePickerInput"
import TextInput from "../../components/Inputs/TextInput/TextInput"
import { useDispatch, useSelector } from "react-redux"
import { addEmployee } from "./EmployeesSlice"
import Popup from "../../components/Popup/Popup"

const CreateEmployee = () => {
  const [open, setOpen] = useState(false)
  const { control, handleSubmit, reset } = useForm()

  const employees = useSelector((state) => state.employees)
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(
      addEmployee({
        ...data,
        id: employees.length + 1,
      })
    )
    setOpen(true)
    reset()
  }

  return (
    <form>
      <Popup open={open} onClose={() => setOpen(false)} text={"Employee created successfully"} />
      <div>
        <TextInput control={control} name="firstName" label="First Name" />
        <TextInput control={control} name="lastName" label="Last Name" />
        <DatePickerInput control={control} name="dateOfBirth" label="Date of Birth" />
        <DatePickerInput control={control} name="startDate" label="StartDate" />
      </div>
      <div>
        <h2>Adress</h2>
        <TextInput control={control} name="street" label="Street" />
        <TextInput control={control} name="city" label="City" />
        {/* select input state */}
        <TextInput control={control} name="zipCode" label="Zip Code" />
      </div>
      {/* select input department */}
      <button onClick={handleSubmit(onSubmit)}>Save</button>
    </form>
  )
}

export default CreateEmployee
