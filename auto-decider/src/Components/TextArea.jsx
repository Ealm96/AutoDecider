import React from 'react';
import { useFormState } from 'react-hook-form';


export default function TextArea({
    register,
    id,
    text,
    control
}) {
    const { errors } = useFormState({ control })

    return (
        <div>
            <label htmlFor={id} className="mt-8 grid grid-cols-6 gap-6 label">{text}</label>
            {/* include validation with required or other standard HTML validation rules */}
            <textarea aria-label="Your answer" id={id} {...register} defaultValue="" />
            {/* errors will return when field validation fails  */}
            {errors[id] && <span className="red-text">This field is required</span>}
        </div>
    )
}