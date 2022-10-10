import React, { useState } from 'react'

const OptionCard = ({option}) => {
    return (
        <div className='flex flex-col items-center gap-4 rounded-2xl bg-black/50 p-4 w-56 text-white text-center'>
            <div className="grid place-items-center ring-2 ring-white p-2 rounded-full">
                {option.icon}
            </div>
            <p className="font-bold text-2xl">{option.title}</p>
            <p>{option.info}</p>
        </div>
    )
}

export default OptionCard