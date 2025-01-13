import './App.css';
import { useForm } from "react-hook-form"

import "./App.css";


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
          {/* register your input into the hook by invoking the "register" function */}
          <div>
            <label htmlFor="email" className="mt-8 grid grid-cols-6 gap-6">Email</label>
            {/* include validation with required or other standard HTML validation rules */}
            <input
              type='text'
              id='email'
              {...register("exampleRequired", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span className="red-text">This field is required</span>}
          </div>

          <input type="submit" />
        </form>
      </div>
    </main>
  )
}
