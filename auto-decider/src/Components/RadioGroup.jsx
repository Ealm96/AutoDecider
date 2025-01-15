import React, { useMemo } from 'react';
import { useFormState } from 'react-hook-form';


export default function RadioGroup({
    register,
    id,
    text,
    options,
    control
}) {

    const { errors } = useFormState({ control })

    const radioItems = useMemo(() => options.map((opt, index) =>
        <>
            <input type='radio' className='input-radio' id={opt.id} name={id} value={opt.value} {...register} />
            <label htmlFor={opt.id} className='my-label'>{opt.title}</label>
            {index !== options.length - 1 && (
                <br />
            )}
        </>
    ), [id, options, register])

    return (
        <div>
            <label htmlFor={id} className="mt-8 grid grid-cols-6 gap-6 label">{text}</label>
            {radioItems}
            {/* errors will return when field validation fails  */}
            {errors[id] && <span className="red-text">This field is required</span>}
        </div>
    )
}