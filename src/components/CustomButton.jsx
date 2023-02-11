import React from 'react'

function CustomButton({ title }) {
    return (
        <button className='w-fit h-fit px-10 py-2 rounded-xl bg-black text-white'>
            {title}
        </button>
    )
}

export default CustomButton