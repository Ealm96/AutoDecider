import './App.css';
import { useForm } from "react-hook-form"
import { CargoOptions, DoorOptions, RowOptions } from './Options/CarOptions';
import Select from './Components/Select';
import Input from './Components/Input';


export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it


  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <div className="border-2 border-gray-400 rounded-lg p-4">
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form className="mt-8 grid grid-cols-6 gap-6" onSubmit={handleSubmit(onSubmit)}>

          <Input
            register={{ ...register("Email", { required: true }) }}
            id='Email'
            text='Email'
          />
          {/* errors will return when field validation fails  */}
          {errors.Email && <span className="red-text">This field is required</span>}

          <Select
            register={{ ...register("NumOfRows", { required: true }) }}
            id="NumOfRows"
            text="Do you want a second row?"
            options={RowOptions}
          />
          {errors.NumOfRows && <span className="red-text">This field is required</span>}

          <Select
            register={{ ...register("NumOfDoors", { required: true }) }}
            id="NumOfDoors"
            text="2 or 4 doors?"
            options={DoorOptions}
          />
          {errors.NumOfDoors && <span className="red-text">This field is required</span>}

          <Select
            register={{ ...register("CargoSpace", { required: true }) }}
            id="CargoSpace"
            text="Is cargo space a necessity?"
            options={CargoOptions}
          />
          {errors.CargoSpace && <span className="red-text">This field is required</span>}

          <input type="submit" />
        </form>
      </div>
    </main>
  )
}
