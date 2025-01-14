import React from 'react';


export default function Input({
    register,
    id,
    text,
}) {
    return (
        <div>
            <label htmlFor={id} className="mt-8 grid grid-cols-6 gap-6">{text}</label>
            {/* include validation with required or other standard HTML validation rules */}
            <input type="text" id={id} {...register} />
        </div>
    )
}