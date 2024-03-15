import { useState } from "react"
import { useForm } from "react-hook-form"
import DatePickerInput from "../../components/Inputs/DatePickerInput/DatePickerInput"
import TextInput from "../../components/Inputs/TextInput/TextInput"
import SelectInput from "../../components/Inputs/SelectInput/SelectInput"
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

  const states = [
    {
      name: "Alabama",
      abbreviation: "AL",
    },
    {
      name: "Alaska",
      abbreviation: "AK",
    },
    {
      name: "American Samoa",
      abbreviation: "AS",
    },
    {
      name: "Arizona",
      abbreviation: "AZ",
    },
    {
      name: "Arkansas",
      abbreviation: "AR",
    },
    {
      name: "California",
      abbreviation: "CA",
    },
    {
      name: "Colorado",
      abbreviation: "CO",
    },
    {
      name: "Connecticut",
      abbreviation: "CT",
    },
    {
      name: "Delaware",
      abbreviation: "DE",
    },
    {
      name: "District Of Columbia",
      abbreviation: "DC",
    },
    {
      name: "Federated States Of Micronesia",
      abbreviation: "FM",
    },
    {
      name: "Florida",
      abbreviation: "FL",
    },
    {
      name: "Georgia",
      abbreviation: "GA",
    },
    {
      name: "Guam",
      abbreviation: "GU",
    },
    {
      name: "Hawaii",
      abbreviation: "HI",
    },
    {
      name: "Idaho",
      abbreviation: "ID",
    },
    {
      name: "Illinois",
      abbreviation: "IL",
    },
    {
      name: "Indiana",
      abbreviation: "IN",
    },
    {
      name: "Iowa",
      abbreviation: "IA",
    },
    {
      name: "Kansas",
      abbreviation: "KS",
    },
    {
      name: "Kentucky",
      abbreviation: "KY",
    },
    {
      name: "Louisiana",
      abbreviation: "LA",
    },
    {
      name: "Maine",
      abbreviation: "ME",
    },
    {
      name: "Marshall Islands",
      abbreviation: "MH",
    },
    {
      name: "Maryland",
      abbreviation: "MD",
    },
    {
      name: "Massachusetts",
      abbreviation: "MA",
    },
    {
      name: "Michigan",
      abbreviation: "MI",
    },
    {
      name: "Minnesota",
      abbreviation: "MN",
    },
    {
      name: "Mississippi",
      abbreviation: "MS",
    },
    {
      name: "Missouri",
      abbreviation: "MO",
    },
    {
      name: "Montana",
      abbreviation: "MT",
    },
    {
      name: "Nebraska",
      abbreviation: "NE",
    },
    {
      name: "Nevada",
      abbreviation: "NV",
    },
    {
      name: "New Hampshire",
      abbreviation: "NH",
    },
    {
      name: "New Jersey",
      abbreviation: "NJ",
    },
    {
      name: "New Mexico",
      abbreviation: "NM",
    },
    {
      name: "New York",
      abbreviation: "NY",
    },
    {
      name: "North Carolina",
      abbreviation: "NC",
    },
    {
      name: "North Dakota",
      abbreviation: "ND",
    },
    {
      name: "Northern Mariana Islands",
      abbreviation: "MP",
    },
    {
      name: "Ohio",
      abbreviation: "OH",
    },
    {
      name: "Oklahoma",
      abbreviation: "OK",
    },
    {
      name: "Oregon",
      abbreviation: "OR",
    },
    {
      name: "Palau",
      abbreviation: "PW",
    },
    {
      name: "Pennsylvania",
      abbreviation: "PA",
    },
    {
      name: "Puerto Rico",
      abbreviation: "PR",
    },
    {
      name: "Rhode Island",
      abbreviation: "RI",
    },
    {
      name: "South Carolina",
      abbreviation: "SC",
    },
    {
      name: "South Dakota",
      abbreviation: "SD",
    },
    {
      name: "Tennessee",
      abbreviation: "TN",
    },
    {
      name: "Texas",
      abbreviation: "TX",
    },
    {
      name: "Utah",
      abbreviation: "UT",
    },
    {
      name: "Vermont",
      abbreviation: "VT",
    },
    {
      name: "Virgin Islands",
      abbreviation: "VI",
    },
    {
      name: "Virginia",
      abbreviation: "VA",
    },
    {
      name: "Washington",
      abbreviation: "WA",
    },
    {
      name: "West Virginia",
      abbreviation: "WV",
    },
    {
      name: "Wisconsin",
      abbreviation: "WI",
    },
    {
      name: "Wyoming",
      abbreviation: "WY",
    },
  ]
  const departments = ["Sales", "Marketing", "Engineering", "Human Resources", "Legal"]
  return (
    <form>
      <Popup open={open} onClose={() => setOpen(false)} text={"Employee created successfully"} />
      <div className="text">
        <TextInput control={control} name="firstName" label="First Name" />
        <TextInput control={control} name="lastName" label="Last Name" />
        <DatePickerInput control={control} name="dateOfBirth" label="Date of Birth" />
        <DatePickerInput control={control} name="startDate" label="StartDate" />
      </div>
      <div className="adress">
        <h2 className="adress_title">Adress</h2>
        <TextInput control={control} name="street" label="Street" />
        <TextInput control={control} name="city" label="City" />
        <SelectInput
          control={control}
          name="state"
          label="State"
          options={states.map((state) => ({ label: state.name, value: state.abbreviation }))}
        />
        <TextInput control={control} name="zipCode" label="Zip Code" />
      </div>
      <SelectInput
        control={control}
        name="department"
        label="Department"
        options={departments.map((department) => ({ label: department, value: department }))}
      />
      <button className="save" onClick={handleSubmit(onSubmit)}>
        Save
      </button>
    </form>
  )
}

export default CreateEmployee
