import React, { useMemo } from 'react';


export default function Select({
    register,
    id,
    text,
    options
}) {

    const listItems = useMemo(() => options.map(opt =>
        <option key={opt.id} value={opt.value}>{opt.title}</option>
    ), [options])

    return (
        <div>
            <label htmlFor={id} className="mt-8 grid grid-cols-6 gap-6">{text}</label>
            {/* include validation with required or other standard HTML validation rules */}
            <select id={id} {...register}>
                {listItems}
            </select>
            {/* errors will return when field validation fails  */}
        </div>
    )
}


