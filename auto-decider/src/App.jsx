import './App.css';
import { useForm } from "react-hook-form"
import { RowOptions } from './Options/CarOptions';


export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => console.log(data)
  const listItems = RowOptions.map(opt =>
    <option key={opt.id}>{opt.title}</option>
  )

  console.log(watch("example")) // watch input value by passing the name of it


  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <div className="border-2 border-gray-400 rounded-lg p-4">
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form className="mt-8 grid grid-cols-6 gap-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor='Email' className="mt-8 grid grid-cols-6 gap-6">Email</label>
            <input type="text" id='Email' {...register("Email", { required: true })} />
            {errors.Email && <span className="red-text">This field is required</span>}
          </div>

          <label htmlFor='NumOfRows' className="mt-8 grid grid-cols-6 gap-6">Do you want a second row?</label>
          {/* include validation with required or other standard HTML validation rules */}
          <select id='numOfRows' defaultValue=" " {...register("NumofDoors", { required: true })}>
            {listItems}
          </select>
          {/* errors will return when field validation fails  */}
          {errors.NumOfDoors && <span className="red-text">This field is required</span>}
          <input type="submit" />
        </form>
      </div>
    </main>
  )
}
