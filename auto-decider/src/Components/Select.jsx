import React, { useMemo } from 'react';
import { useFormState } from 'react-hook-form';


export default function Select({
    register,
    id,
    text,
    options,
    control,
    className,
}) {

    const { errors } = useFormState({ control })

    const listItems = useMemo(() => options.map((opt, index) =>
        <>
            {index === 0 && (
                <option key={0} disabled value=''>Choose One</option>
            )}
            <option key={opt.key} value={opt.value}>{opt.title}</option>
        </>
    ), [options])

    return (
        <div>
            <label htmlFor={id} className="mt-8 grid grid-cols-6 gap-6 label">{text}</label>
            {/* include validation with required or other standard HTML validation rules */}
            <select id={id} defaultValue='' className={`${className}`} {...register}>
                {listItems}
            </select>
            {/* errors will return when field validation fails  */}
            {errors[id] && <span className="red-text">This field is required</span>}
        </div>
    )
}


